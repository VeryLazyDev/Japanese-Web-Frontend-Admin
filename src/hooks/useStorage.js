import db from "@/config/dexiedb/db";

const CHUNK_SIZE = 1000;
const useStorage = () => {
    const LoadAllFuriganaDataToStorage = async (furiganaData) => {
        for (let i = 0; i < furiganaData.length; i += CHUNK_SIZE) {
            await db.furigana.bulkPut(furiganaData.slice(i, i + CHUNK_SIZE));
        }
    };
    const GetFuriganaByIndex = async (index) => {
        const data = await db.furigana.get(index);
        return data;
    };
    return { LoadAllFuriganaDataToStorage, GetFuriganaByIndex };
};
export default useStorage;
