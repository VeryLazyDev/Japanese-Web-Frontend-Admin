import ModuleCard from "./moduleCard";
import { modules } from "@/constant/user_home_modules";
const ModuleList = () => {
  return (
    <>
      <h1 className="font-inter font-semibold w-full mt-10 mb-5">
        Learning Modules
      </h1>

      <div className="bg-transparent h-auto mt-2 gap-3 grid w-90 sm:w-150 sm:grid-cols-2 lg:w-250 lg:grid-cols-3">
        {modules.map((item) => (
          <ModuleCard
            key={item.id}
            title={item.title}
            description={item.description}
            kanji={item.kanji}
            bgColor={item.bgColor}
            kanjiColor={item.kanjiColor}
          />
        ))}
      </div>
    </>
  );
};

export default ModuleList;
