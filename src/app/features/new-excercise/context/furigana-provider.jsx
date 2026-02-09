import { createContext } from "react";
import useQuestionState from "../hooks/userQuestionState";
import useStorage from "@/hooks/useStorage";
import useUtils from "@/hooks/useUtils";
import { useState } from "react";
import { useEffect } from "react";
import TinySegmenter from "tiny-segmenter";

const FuriganaContext = createContext({});
const FuriganaProvider = ({ children }) => {
    const { paragraph } = useQuestionState();
    const { GetFuriganaKanjiByIndex, GetFuriganaNamesByIndex } = useStorage();
    const { sha256 } = useUtils();
    const [code, setCode] = useState("");
    const [furiganatedString, setFuriganatedString] = useState("");
    const HexToKanji = async (value) => {
        const regex = /\$hex\{([a-f0-9]+)\}/g;
        const data = [...value.matchAll(regex)];
        let result = value;

        for (let i = 0; i < data.length; i++) {
            const hexId = data[i][1];
            let furigana = await GetFuriganaKanjiByIndex(hexId);
            console.log(await sha256("私"));
            if (!furigana) {
                furigana = await GetFuriganaNamesByIndex(hexId);
            }

            result = result.replace(`$hex{${hexId}}`, furigana.data[0].text);
        }
        // const temp = await GetFuriganaKanjiByIndex(sha256("今日"));
        setFuriganatedString(result);
    };

    const FuriganaFinder = async (kanji) => {
        if (!kanji) return null;

        try {
            const key = await sha256(kanji);

            let furigana = await GetFuriganaKanjiByIndex(key);

            // fallback to names if Kanji furigana not found
            if (!furigana) {
                furigana = await GetFuriganaNamesByIndex(key);

                // fallback to smaller substring
                if (!furigana) {
                    return FuriganaFinder(kanji.slice(0, -1));
                }
            }

            // At this point furigana is guaranteed to exist
            if (furigana?.data) {
                setCode((prev) =>
                    prev.replace(
                        kanji,
                        `<div class="inline-flex flex-col items-center mx-0.5 align-bottom overflow-auto">
                <rt class="text-[10px] -mb-1 text-gray-500">${furigana.data[0].reading}</rt>
                <ruby class="text-base">$hex{${furigana.id}}</ruby>
              </div>`,
                    ),
                );
            }

            return furigana;
        } catch (err) {
            console.error("FuriganaFinder error:", err);
            return null;
        }
    };

    const Furiganate = () => {
        // const regex = /[\u4E00-\u9FFF]/g;
        // const regex = /\p{Script=Han}+/gu;
        const regex =
            /[\p{Script=Han}\p{Script=Hiragana}]+|[\p{Script=Katakana}]+|[a-zA-Z0-9]+/gu;
        // /[a-zA-Z0-9\u3040-\u309F\u3000-\u303F[\]{}()!@#$%^&*\-_=+;:'",.<>/?\\|~]+/g;
        // /[a-zA-Z0-9\u3040-\u309F\u3000-\u303F\uff00-\uffef[\]{}()!@#$%^&*\-_=+;:'",.<>/?\\|~]+/g;
        // const regex = /[a-zA-Z0-9\u3040-\u309F\u3000-\u303F\uff00-\uffef]+/g;
        // const regex =
        //     /[a-zA-Z\d\u3040-\u309F\u3002\W\uff08\uff09\u300c\u300d]+/;
        // const kanjiData = code.split(regex).filter((item) => item != "");
        let kanjiData;
        const segmenter = new TinySegmenter();
        kanjiData = segmenter.segment(code);
        if (!kanjiData) {
            kanjiData = code.match(regex);
        }

        if (!kanjiData) return;
        if (kanjiData.length === 0) {
            return;
        }
        // PruneFuriganated(paragraph);
        kanjiData.forEach((kanji) => {
            FuriganaFinder(kanji);
        });
        // FuriganaFinder([code]);
        // Furiganate();
    };
    useEffect(() => {
        Furiganate();
    }, [code]);

    useEffect(() => {
        setCode(paragraph);
    }, [paragraph]);

    return (
        <FuriganaContext.Provider
            value={{
                Furiganate,
                FuriganaFinder,
                HexToKanji,
                code,
                furiganatedString,
            }}
        >
            {children}
        </FuriganaContext.Provider>
    );
};
export { FuriganaContext, FuriganaProvider };
