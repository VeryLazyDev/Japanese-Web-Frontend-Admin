const ReadingStatusBadge = ({ status }) => {
    return (
        <div
            className={`rounded-lg text-xs px-2 py-1 ${status == "New" ? "bg-amber-300 text-amber-700" : "bg-emerald-300 text-emerald-700"}`}
        >
            {status}
        </div>
    );
};
export default ReadingStatusBadge;
