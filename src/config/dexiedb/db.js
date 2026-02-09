import Dexie from "dexie";
const db = new Dexie("japanese-app-db");
db.version(1).stores({
    furigana_kanji: "id,data",
    furigana_names: "id,data",
});
export default db;
