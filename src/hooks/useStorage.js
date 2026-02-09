import db from "@/config/dexiedb/db";

const CHUNK_SIZE = 1000;
const useStorage = () => {
    const PutFuriganaKanjiDataToStorage = async (furiganaData) => {
        await db.furigana_kanji.bulkPut(furiganaData);
    };
    const PutFuriganaNamesDataToStorage = async (furiganaData) => {
        await db.furigana_names.bulkPut(furiganaData);
    };
    const GetFuriganaKanjiByIndex = async (index) => {
        const data = await db.furigana_kanji.get(index);
        return data;
    };
    const GetFuriganaNamesByIndex = async (index) => {
        const data = await db.furigana_names.get(index);
        return data;
    };

    const GetFuriganaByKanji = async (kanji) => {
        const data = await db.furigana_names
            .filter((item) => item.data.text === kanji)
            .toArray();
        console.log(data);
        return data;
    };
    return {
        PutFuriganaKanjiDataToStorage,
        PutFuriganaNamesDataToStorage,
        GetFuriganaKanjiByIndex,
        GetFuriganaNamesByIndex,
        GetFuriganaByKanji,
    };
};
export default useStorage;
