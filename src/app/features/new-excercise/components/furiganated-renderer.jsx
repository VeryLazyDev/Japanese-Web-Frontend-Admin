import { useMemo } from "react";
import DOMPurify from "dompurify";

const FuriganaRenderer = ({ text, className, furigana = true }) => {
  const sanitizedHtml = useMemo(() => {
    const defaultAllowedTags = ["div", "span", "ruby", "rb", "p", "br"];
    const config = {
      USE_PROFILES: { html: true },
      ALLOWED_TAGS: furigana
        ? [...defaultAllowedTags, "rt"]
        : defaultAllowedTags,
      ALLOWED_ATTR: ["class"],
    };
    if (!furigana) {
      config.FORBID_TAGS = ["rt"];
      config.FORBID_CONTENTS = ["rt"];
    }
    return DOMPurify.sanitize(text, config);
  }, [text, furigana]);

  return (
    <div
      className={`leading-loose text-sm w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default FuriganaRenderer;
