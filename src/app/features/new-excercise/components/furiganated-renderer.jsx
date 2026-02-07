import React, { useMemo } from "react";

const FuriganaRenderer = ({ text }) => {
  const regex =
    /furiganated\$\{kanji\$\{(.*?)\}\$kanji furi\$\{(.*?)\}\$furi\}\$furiganated/g;
  const parsedContent = useMemo(() => {
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (index % 3 === 1) {
        const kanji = part;
        const furi = parts[index + 1];

        return (
          <div
            key={index}
            className="inline-flex flex-col items-center mx-0.5 align-bottom overflow-auto"
          >
            <span className="text-[10px] -mb-1 text-gray-500">{furi}</span>
            <span className="text-base">{kanji}</span>
          </div>
        );
      }

      if (index % 3 === 2) {
        return null;
      }

      return <span key={index}>{part}</span>;
    });
  }, [text]);

  return <div className="leading-loose">{parsedContent}</div>;
};

export default FuriganaRenderer;
