import React, { useMemo } from "react";

const FuriganaRenderer = ({ text }) => {
    // This Regex looks for your specific pattern:
    // furiganated${kanji${...}$kanji furi${...}$furi}$furiganated
    const regex =
        /furiganated\$\{kanji\$\{(.*?)\}\$kanji furi\$\{(.*?)\}\$furi\}\$furiganated/g;

    const parsedContent = useMemo(() => {
        // split(regex) works magically: if the regex has capturing groups (parentheses),
        // the results are included in the output array.
        // Result format: [ "Normal Text", "Kanji", "Furi", "Normal Text", ... ]
        const parts = text.split(regex);

        return parts.map((part, index) => {
            // Logic:
            // In the split array:
            // index % 3 === 0 -> Normal text
            // index % 3 === 1 -> The Kanji (Capture Group 1)
            // index % 3 === 2 -> The Furigana (Capture Group 2)

            // We process the "Kanji" (index 1, 4, 7...) and look ahead for the "Furi"
            if (index % 3 === 1) {
                const kanji = part;
                const furi = parts[index + 1]; // The next item is always the furigana

                return (
                    <div
                        key={index}
                        className="inline-flex flex-col items-center mx-0.5 align-bottom"
                    >
                        <span className="text-[10px] -mb-1 text-gray-500">
                            {furi}
                        </span>
                        <span className="text-base">{kanji}</span>
                    </div>
                );
            }

            // If it is the Furigana part (index 2, 5, 8...), we skip it because
            // we already rendered it inside the previous block.
            if (index % 3 === 2) {
                return null;
            }

            // Default: It is normal text
            return <span key={index}>{part}</span>;
        });
    }, [text]);

    return <div className="leading-loose">{parsedContent}</div>;
};

export default FuriganaRenderer;
