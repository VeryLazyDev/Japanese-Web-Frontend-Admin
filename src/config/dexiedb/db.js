import Dexie from "dexie";
const db = new Dexie("japanese-app-db");
db.version(1).stores({
    furigana: "id,data",
});
export default db;
