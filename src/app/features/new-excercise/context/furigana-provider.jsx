import { createContext } from "react";
import useQuestionState from "../hooks/userQuestionState";
import useStorage from "@/hooks/useStorage";
import useUtils from "@/hooks/useUtils";

const FuriganaContext = createContext({});
const FuriganaProvider = ({ children }) => {
  const { paragraph, setParagraph } = useQuestionState();
  const { GetFuriganaByIndex } = useStorage();
  const { sha256 } = useUtils();

  const HexToKanji = () => {
    const regex = /\$hex\{([a-f0-9]+)\}/g;
    const data = paragraph.matchAll(regex);
    data.forEach((item) => {
      GetFuriganaByIndex(item[1]).then((furigana) => {
        setParagraph((prev) =>
          prev.replace(`$hex{${furigana.id}}`, furigana.data.text),
        );
      });
    });
  };
  // const regex = /\$f\{^}f\$/g;
  const FuriganaFinder = (kanji) => {
    sha256(kanji).then((key) => {
      if (!kanji) return;
      GetFuriganaByIndex(key).then((furigana) => {
        if (!furigana) {
          return FuriganaFinder(kanji.slice(0, -1));
        }
        setParagraph((prev) => {
          return prev.replace(
            kanji,
            "furiganated${kanji${$hex{" +
              furigana.id +
              "}}$kanji furi${" +
              furigana.data.reading +
              "}$furi}$furiganated",
          );
        });
        return furigana;
      });
    });
  };

  const Furiganate = () => {
    const regex =
      /[a-zA-Z0-9\u3040-\u309F\u3000-\u303F\uff00-\uffef[\]{}()!@#$%^&*\-_=+;:'",.<>/?\\|~]+/g;
    // const regex = /[a-zA-Z0-9\u3040-\u309F\u3000-\u303F\uff00-\uffef]+/g;
    // const regex =
    //     /[a-zA-Z\d\u3040-\u309F\u3002\W\uff08\uff09\u300c\u300d]+/;
    const kanjiData = paragraph.split(regex).filter((item) => item != "");
    console.log(kanjiData);
    if (kanjiData.length === 0) {
      return;
    }
    // PruneFuriganated(paragraph);
    kanjiData.forEach((kanji) => {
      FuriganaFinder(kanji);
    });
  };
  return (
    <FuriganaContext.Provider
      value={{ Furiganate, FuriganaFinder, HexToKanji }}
    >
      {children}
    </FuriganaContext.Provider>
  );
};
export { FuriganaContext, FuriganaProvider };
