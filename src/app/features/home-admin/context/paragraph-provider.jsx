import useDialogs from "@/hooks/useDialogs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ParagraphContext = createContext({
  paragraphList: [],
  isLoading: false,
  isRefetching: false,
  error: null,
  deleteParagraph: async () => {},
  filter: {
    page: 0,
    size: 10,
    level: "N5",
    paragraphType: "SHORT",
  },
  setFilter: () => {},
  openFIlter: false,
  setOpenFilter: () => {},
  handleOpenFilter: () => {},
  handleCloseFilter: () => {},
});

const FetchAllParagraph = async (filter) => {
  var query = `?page=${filter.page}&size=${filter.size}&level=${filter.level}&paragraphType=${filter.paragraphType}`;
  const { data } = await axios.get(
    "https://proxy.phyoheinko.com?https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/all" +
      query,
  );
  return data;
};

const ParagraphProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    page: 0,
    size: 10,
    level: "N5",
    paragraphType: "SHORT",
  });
  const [openFilter, setOpenFilter] = useState(false);
  const { data, isLoading, isRefetching, error, refetch } = useQuery({
    queryKey: ["paragraph"],
    queryFn: () => FetchAllParagraph(filter),
  });

  const { PushDialog, CloseDialogWithId } = useDialogs();
  const [paragraphList, setParagraphList] = useState([]);
  useEffect(() => {
    if (!data?.content) return;
    const update = () => {
      setParagraphList(data.content);
    };
    update();
  }, [data]);

  useEffect(() => {
    refetch();
  }, [filter, refetch]);

  const deleteParagraph = async (id) => {
    // 1. Show loading dialog
    PushDialog({
      id: "paragraph-delete-loading",
      type: "loading",
      message: "Please wait...",
    });

    try {
      // 2. Call API
      await axios.delete(
        `https://proxy.phyoheinko.com?https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/delete/${id}`,
      );
      CloseDialogWithId("paragraph-delete-loading");
      // 3. On success
      PushDialog({
        id: "paragraph-delete-success",
        type: "success",
        title: "Success",
        message: "Paragraph deleted successfully",
      });
    } catch (error) {
      CloseDialogWithId("paragraph-delete-loading");
      // 4. On error
      PushDialog({
        id: "paragraph-delete-error",
        type: "error",
        title: "Error",
        message: "Failed to delete paragraph" + error.message,
      });
    } finally {
      refetch();
    }
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <ParagraphContext.Provider
      value={{
        paragraphList,
        isLoading,
        isRefetching,
        error,
        deleteParagraph,
        filter,
        setFilter,
        openFilter,
        setOpenFilter,
        handleOpenFilter,
        handleCloseFilter,
      }}
    >
      {children}
    </ParagraphContext.Provider>
  );
};

export { ParagraphContext, ParagraphProvider };
