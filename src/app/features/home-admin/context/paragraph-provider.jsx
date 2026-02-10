import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const ParagraphContext = createContext();

const FetchAllParagraph = async () => {
  const { data } = await axios.get(
    "https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/all?size=100",
  );
  return data;
};

const ParagraphProvider = ({ children }) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["paragraph"],
    queryFn: FetchAllParagraph,
  });
  const [paragraphList, setParagraphList] = useState([]);
  useEffect(() => {
    if (!data?.content) return;
    const update = () => {
      setParagraphList(data.content);
    };
    update();
  }, [data]);
  return (
    <ParagraphContext.Provider value={{ paragraphList, isPending, error }}>
      {children}
    </ParagraphContext.Provider>
  );
};
export { ParagraphContext, ParagraphProvider };
