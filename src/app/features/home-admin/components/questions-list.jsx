import useParagraph from "../hooks/useParagraph";
import { Loader2 } from "lucide-react";
import QuestionCard from "./question-card";

const QuestionList = () => {
    const { paragraphList, isPending } = useParagraph();
    return (
        <div className="mt-5 max-h-screen">
            <div className="w-full h-fit grid grid-cols-3 max-md:grid-cols-2 grid-rows-3 gap-2 relative">
                <div
                    className={`w-full h-screen fixed flex gap-2 top-0 left-0 items-center justify-center ${isPending ? "" : "hidden"}`}
                >
                    <Loader2 className="animate-spin" />
                    <p className="text-sm">Loading data...</p>
                </div>
                {paragraphList &&
                    paragraphList.map((item) => (
                        <QuestionCard
                            key={item.id}
                            id={item.id}
                            paragraph={item.paragraph}
                        />
                    ))}
            </div>
        </div>
    );
    // >>>>>>> 3299204 (add)
};
export default QuestionList;
