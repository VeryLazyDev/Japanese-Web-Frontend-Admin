import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
const ParagraphContext = createContext();

const FetchAllParagraph = async () => {
  const { data } = await axios.get(
    "https://api-muda-zero.nyinyimyintmyat.com/japanese-app/api/v1/paragraph/all?size=10",
  );
  return data;
};

const ParagraphProvider = ({ children }) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["paragraph"],
    queryFn: FetchAllParagraph,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <ParagraphContext.Provider value={{ data, isPending, error }}>
      {children}
    </ParagraphContext.Provider>
  );
};
export { ParagraphContext, ParagraphProvider };
