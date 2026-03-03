import useFuriganaSetting from "../hooks/useFuriganaSetting";

const LoadFuriganaData = () => {
  const { Loaded, OnLoadClick } = useFuriganaSetting();
  return (
    <div className="w-full flex flex-row justify-between items-center bg-primary-bg border border-primary-bd rounded p-1">
      <div>
        <h3 className="text-sm font-semibold">Load Furigana Data</h3>
        <p className="text-xs text-primary/50">
          Data Loaded : {Loaded.toString()}
        </p>
      </div>
      <div>
        <button
          className="text-xs text-semibold font-semibold p-2 text-primary-bg bg-primary hover:bg-primary/80 rounded"
          onClick={OnLoadClick}
        >
          Load
        </button>
      </div>
    </div>
  );
};
export default LoadFuriganaData;
