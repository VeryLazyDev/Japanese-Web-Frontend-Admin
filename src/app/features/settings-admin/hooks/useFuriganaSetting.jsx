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
    const { PutFuriganaKanjiDataToStorage, PutFuriganaNamesDataToStorage } =
        useStorage();
    const { PushDialog, CloseDialogWithId, UpdateDialogMessage } = useDialogs();
    const CHUNK_SIZE = 500;
    const LoadFuriganaData = async () => {
        const { data: KanjiData, headers: KanjiDataHeaders } = await axios.get(
            "https://proxy.phyoheinko.com?" +
                encodeURIComponent(
                    "https://github.com/phy0hk/FuriganaIndexer/releases/download/v2.3.1/IndexedJmdictFurigana.json",
                ),
        );
        console.log(KanjiData);
        const { data: NameData, headers: NameDataHeaders } = await axios.get(
            "https://proxy.phyoheinko.com?" +
                encodeURIComponent(
                    "https://github.com/phy0hk/FuriganaIndexer/releases/download/v2.3.1/IndexedJmnedictFurigana.json",
                ),
        );
        console.log(NameData);
        const KanjiDataResType = KanjiDataHeaders["content-type"];
        const NameDataResType = NameDataHeaders["content-type"];

        const isValidType = (type) =>
            type?.includes("application/json") ||
            type?.includes("application/octet-stream");

        if (!isValidType(KanjiDataResType) || !isValidType(NameDataResType)) {
            throw new Error("Invalid response type");
        }

        const AllFuriganaData = { KanjiData, NameData };
        console.log(
            AllFuriganaData.KanjiData.length,
            AllFuriganaData.NameData.length,
        );
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
            PutAllFuriganaKanjiDataToStorage(data);
        },
    });

    const PutAllFuriganaKanjiDataToStorage = async (furiganaData) => {
        PushDialog({
            id: "furigana-loading",
            type: "loading",
            message: "Loading furigana data 0%",
        });

        const total =
            furiganaData.KanjiData.length + furiganaData.NameData.length;

        for (let i = 0; i < furiganaData.KanjiData.length; i += CHUNK_SIZE) {
            await PutFuriganaKanjiDataToStorage(
                furiganaData.KanjiData.slice(i, i + CHUNK_SIZE),
            );

            const percent = Math.min(
                100,
                Math.round(((i + CHUNK_SIZE) / total) * 100),
            );
            UpdateDialogMessage(
                "furigana-loading",

                `Loading furigana kanji data ${percent}% (${i}/${total})`,
            );
        }

        for (let i = 0; i < furiganaData.NameData.length; i += CHUNK_SIZE) {
            await PutFuriganaNamesDataToStorage(
                furiganaData.NameData.slice(i, i + CHUNK_SIZE),
            );

            const percent = Math.min(
                100,
                Math.round(
                    ((furiganaData.KanjiData.length + i + CHUNK_SIZE) / total) *
                        100,
                ),
            );
            UpdateDialogMessage(
                "furigana-loading",

                `Loading furigana names data ${percent}% (${furiganaData.KanjiData.length + i}/${total})`,
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
