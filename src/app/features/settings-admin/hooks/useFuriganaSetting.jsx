import LoadingDialog from "@/components/dialogs/loading-dialog/loading-dialog";
import useDialogs from "@/hooks/useDialogs";
import useStorage from "@/hooks/useStorage";
import { IsFuriganaLoaded } from "@/lib/get-furigana";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useFuriganaSetting = () => {
  const [Loaded, setLoaded] = useState(IsFuriganaLoaded);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { PutFuriganaDataToStorage } = useStorage();
  const { PushDialog, CloseDialogWithId, UpdateDialogMessage } = useDialogs();
  const CHUNK_SIZE = 500;
  const LoadFuriganaData = async () => {
    const { data: KanjiData, headers: KanjiDataHeaders } = await axios.get(
      "/IndexedJmdictFurigana.json",
    );
    const { data: NameData, headers: NameDataHeaders } = await axios.get(
      "/IndexedJmnedictFurigana.json",
    );
    const KanjiDataResType = KanjiDataHeaders["content-type"];
    const NameDataResType = NameDataHeaders["content-type"];
    if (
      KanjiDataResType != "application/json" &&
      NameDataResType != "application/json"
    ) {
      throw new Error("Invalid response type");
    }
    const AllFuriganaData = [...KanjiData, ...NameData];
    return AllFuriganaData;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: LoadFuriganaData,
    onError: (error) => {
      CloseDialogWithId("furigana-confirm-load");
      PushDialog({
        type: "error",
        message: "Failed to load furigana data : " + error,
        title: "Error",
      });
    },
    onSuccess: (data) => {
      setIsDownloaded(true);
      CloseDialogWithId("furigana-loading");
      PutAllFuriganaDataToStorage(data);
    },
  });

  const PutAllFuriganaDataToStorage = async (furiganaData) => {
    PushDialog({
      id: "furigana-loading",
      type: "loading",
      message: "Loading furigana data 0%",
    });

    const total = furiganaData.length;

    for (let i = 0; i < total; i += CHUNK_SIZE) {
      await PutFuriganaDataToStorage(furiganaData.slice(i, i + CHUNK_SIZE));

      const percent = Math.min(
        100,
        Math.round(((i + CHUNK_SIZE) / total) * 100),
      );
      UpdateDialogMessage(
        "furigana-loading",

        `Loading furigana data ${percent}% (${i}/${furiganaData.length})`,
      );
    }
    PushDialog({
      type: "success",
      title: "Success",
      message: "Furigana data loaded successfully",
      id: "furigana-loaded-success",
    });
    localStorage.setItem("furigana-loaded", true);
    setLoaded(true);
    CloseDialogWithId("furigana-loading");
  };

  useEffect(() => {
    if (isPending && !isDownloaded) {
      PushDialog({
        id: "furigana-loading",
        type: "loading",
        message: "Downloading furigana data...",
      });
    }
  }, [isPending]);

  const OnLoadClick = () => {
    setIsDownloaded(false);
    PushDialog({
      id: "furigana-confirm-load",
      type: "confirm",
      title: "Confirmation",
      message: Loaded
        ? "You already loaded this. Reload?"
        : "Load furigana data?",
      onConfirm: () => {
        CloseDialogWithId("furigana-confirm-load");
        mutate();
      },
    });
  };

  return { Loaded, OnLoadClick };
};

export default useFuriganaSetting;
