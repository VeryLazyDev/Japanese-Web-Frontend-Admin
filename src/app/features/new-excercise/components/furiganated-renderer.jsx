import { useMemo } from "react";
import DOMPurify from "dompurify";

const FuriganaRenderer = ({ text }) => {
    const sanitizedHtml = useMemo(() => {
        return DOMPurify.sanitize(text, {
            USE_PROFILES: { html: true },
            ALLOWED_TAGS: ["div", "span", "ruby", "rt", "rb", "p", "br"],
            ALLOWED_ATTR: ["class"],
        });
    }, [text]);

    return (
        <div
            className="leading-loose"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    );
};

export default FuriganaRenderer;
