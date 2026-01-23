import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModuleCard = ({
  title,
  description,
  kanji,
  bgColor,
  kanjiColor,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(path)}
        className="border-primary-bd bg-secondary-bg w-full h-42 p-6 border rounded-lg cursor-pointer
            hover:scale-102 hover:shadow-md transition-all duration-200"
      >
        <div className="flex w-full">
          <div className="w-full h-auto">
            <h1 className="font-aux-mono mb-3 uppercase">{title} </h1>
            <p className="min-w-45 text-xs text-neutral-500">{description}</p>
          </div>

          <div className="bg-transparent w-full h-20 flex justify-end">
            <div
              className={`rounded-full ${bgColor} w-15 h-15 flex items-center justify-center`}
            >
              <p
                className={`font-noto-sans-jp font-semibold text-2xl ${kanjiColor}`}
              >
                {kanji}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-transparent w-full h-12 pt-5 flex justify-between">
          <p className="text-neutral-500 text-xs">Start learning</p>
          <ChevronRight size={18} className="text-muted-font" />
        </div>
      </div>
    </>
  );
};

export default ModuleCard;
