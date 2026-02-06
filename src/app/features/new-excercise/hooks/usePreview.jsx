import { useCallback } from "react";

// import { useState } from "react";
const usePreview = (paragraph) => {
    const CreatePreviewObject = useCallback(() => {
        const kanjiStart = paragraph.replaceAll("kanji${", "<span>");
        const kanjiEnd = kanjiStart.replaceAll("}$kanji", "</span>");
        const furiStart = kanjiEnd.replaceAll(
            "furi${",
            " class=`text-[12px] -mb-1`",
        );
        const furiEnd = furiStart.replaceAll("}$furi", "</span>");
        const containerStart = furiEnd.replaceAll(
            "furiganated${",
            "<div class='flex flex-col items-center'>",
        );
        const containerEnd = containerStart.replaceAll(
            "}$furiganated",
            "</div>",
        );
        return containerEnd;
    }, [paragraph]);

    return { CreatePreviewObject };
};
export default usePreview;
