import useReadingList from "../hooks/userReadingList";
import ReadingCard from "./reading-card/card";

const ParagraphList = () => {
    const { readingsData } = useReadingList();
    return (
        <div className="flex gap-2 max-lg:flex-col w-full justify-between">
            {readingsData &&
                readingsData.map((item) => (
                    <ReadingCard
                        key={item.id}
                        id={item.id}
                        paragraph={item.paragraph}
                    />
                ))}
        </div>
    );
};
export default ParagraphList;
