import { paragarphLevel, paragarphType } from "@/constant/paragraph-data";
<<<<<<< HEAD
import { createContext, useRef, useState } from "react";
const QuestionStateContext = createContext();
const QuestionStateProvider = ({ children }) => {
=======
import useStorage from "@/hooks/useStorage";
import useUtils from "@/hooks/useUtils";
import { IsFuriganaLoaded } from "@/lib/get-furigana";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import usePreview from "../hooks/usePreview";
const QuestionStateContext = createContext();
const GetFuriganaData = async (FuriganaLoaded) => {
    if (FuriganaLoaded) return [];
    const { data } = await axios("/IndexedJmdictFurigana.json");
    const { data: data2 } = await axios("/IndexedJmnedictFurigana.json");
    const AllKanjiFurigana = [...data, ...data2];
    return { data: AllKanjiFurigana };
};
const QuestionStateProvider = ({ children }) => {
    const { LoadAllFuriganaDataToStorage, GetFuriganaByIndex } = useStorage();
    const [FuriganaLoaded, setFuriganaLoaded] = useState(IsFuriganaLoaded);
    const [paragraph, setParagraph] = useState("");
    const { sha256 } = useUtils();
>>>>>>> 3299204 (add)
    const [Questions, setQuestions] = useState([
        {
            questionId: 1,
            correctAnswerId: 0,
        },
    ]);
<<<<<<< HEAD
=======

    const [previewMode, setPreviewMode] = useState(false);
    const [preview, setPreview] = useState("");
    const { CreatePreviewObject } = usePreview(paragraph);
>>>>>>> 3299204 (add)
    const lastQuestionId = useRef(1);
    const [currentKanjiLevel, setCurrentKanjiLevel] = useState(
        paragarphLevel[0],
    );
    const [currentParagraphType, setCurrentParagraphType] = useState(
        paragarphType[0],
    );
<<<<<<< HEAD
=======
    const { data: FuriganaData } = useQuery({
        queryFn: () => GetFuriganaData(FuriganaLoaded),
        queryKey: ["furigana-data"],
    });
    useEffect(() => {
        if (!FuriganaData || FuriganaData.length <= 0) return;
        LoadAllFuriganaDataToStorage(FuriganaData)
            .then(() => {
                localStorage.setItem("furigana_loaded", true);
                setFuriganaLoaded(true);
            })
            .catch((error) => console.error("An error occur", error));
    }, [FuriganaData, LoadAllFuriganaDataToStorage]);
>>>>>>> 3299204 (add)

    const AddNewQuestion = () => {
        lastQuestionId.current += 1;
        setQuestions((prev) => [
            ...prev,
            {
                questionId: lastQuestionId.current,
                correctAnswerId: 0,
            },
        ]);
    };
<<<<<<< HEAD
=======

>>>>>>> 3299204 (add)
    const RemoveLastQuestion = () => {
        if (lastQuestionId.current === 1) return;
        setQuestions((prev) => prev.slice(0, -1));
        lastQuestionId.current -= 1;
    };

    const ChangeCorrectAnswer = (questionId, newCorrectId) => {
        setQuestions((prev) =>
            prev.map((q) =>
                q.questionId === questionId
                    ? { ...q, correctAnswerId: newCorrectId }
                    : q,
            ),
        );
    };
<<<<<<< HEAD

=======
    const handleOnParagraphChange = (e) => {
        setParagraph(e.target.value);
    };

    //This will handle the furiganation of paragraph

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
    useEffect(() => {
        const Update = () => {
            setPreview(CreatePreviewObject(paragraph));
        };
        Update();
    }, [previewMode, setPreview, CreatePreviewObject, paragraph]);
>>>>>>> 3299204 (add)
    return (
        <QuestionStateContext.Provider
            value={{
                Questions,
                ChangeCorrectAnswer,
                AddNewQuestion,
                RemoveLastQuestion,
                currentKanjiLevel,
                currentParagraphType,
                setCurrentKanjiLevel,
                setCurrentParagraphType,
                lastQuestionId,
<<<<<<< HEAD
=======
                Furiganate,
                HexToKanji,
                paragraph,
                handleOnParagraphChange,
                previewMode,
                setPreviewMode,
                preview,
>>>>>>> 3299204 (add)
            }}
        >
            {children}
        </QuestionStateContext.Provider>
    );
};
export { QuestionStateContext, QuestionStateProvider };
