import { useTranslation } from "react-i18next";

const ReadingStatusBadge = ({ status }) => {
    const { t } = useTranslation("misc", { keyPrefix: "user" });
    return (
        <div
            className={`rounded-lg text-xs px-2 py-1 ${status == "New" ? "bg-amber-300 text-amber-700" : "bg-emerald-300 text-emerald-700"}`}
        >
            {t(status)}
        </div>
    );
};
export default ReadingStatusBadge;
