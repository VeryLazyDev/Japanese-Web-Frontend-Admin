import { useEffect, useState } from "react";

function sanitizeSvg(svgText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, "image/svg+xml");

    // ❌ remove <script> tags
    doc.querySelectorAll("script").forEach((el) => el.remove());

    // ❌ remove inline event handlers (optional but recommended)
    doc.querySelectorAll("*").forEach((el) => {
        [...el.attributes].forEach((attr) => {
            if (attr.name.startsWith("on")) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return doc.documentElement.outerHTML;
}

const SvgIcon = ({ src, className }) => {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        let mounted = true;

        fetch(src)
            .then((res) => res.text())
            .then((text) => {
                if (mounted) {
                    setSvg(sanitizeSvg(text));
                }
            });

        return () => {
            mounted = false;
        };
    }, [src]);

    return (
        <span
            className={className}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};

export default SvgIcon;
