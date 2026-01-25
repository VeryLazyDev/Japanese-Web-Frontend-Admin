import { Book, AlarmClockIcon } from "lucide-react";
import { MdBolt } from "react-icons/md";
import startSfx from "../assets/sfx/startSfx.mp3";

export const soundEffects = { startSfx };

export const readingModules = [
    {
        id: 1,
        title: "jlpt reading",
        icon: Book,
        desc: "Strategically selected exercises to equip you with essential skills for the tests.",
        color: "white text-3xl",
    },
    {
        id: 2,
        title: "speed run",
        icon: MdBolt,
        desc: "Accelerate and sharpen your reading speed & accuracy by doing quick drills.",
        style: "text-amber-400 text-3xl",
    },
];

export const modules = [
    {
        id: 1,
        title: "READING",
        description:
            "Improve your reading comprehension with texts tailored to your level",
        kanji: "読",
        bgColor: "bg-cyan-200",
        kanjiColor: "text-cyan-700",
        path: "/reading-modules",
    },
    {
        id: 2,
        title: "KANJI",
        description:
            "Learn, review and master kanji meanings, readings, and usage",
        kanji: "字",
        bgColor: "bg-fuchsia-200",
        kanjiColor: "text-fuchsia-700",
    },
    {
        id: 3,
        title: "GRAMMAR",
        description: "Learn grammar patterns with practical examples",
        kanji: "文",
        bgColor: "bg-teal-200",
        kanjiColor: "text-teal-700",
    },
    {
        id: 4,
        title: "LISTENING",
        description: "Develop listening skills for your upcoming test",
        kanji: "聞",
        bgColor: "bg-pink-200",
        kanjiColor: "text-pink-700",
    },
    {
        id: 5,
        title: "Vocabulary",
        description: "Build your word bank with spaced repitition",
        kanji: "言",
        bgColor: "bg-yellow-200",
        kanjiColor: "text-yellow-700",
    },
];
