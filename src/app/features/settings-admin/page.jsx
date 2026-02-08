import LoadFuriganaData from "./components/load-furigana-data";
import SettingsPageHeader from "./components/settings-header";

const SettingsAdminPage = () => {
  return (
    <div className="items-center w-full h-full">
      <div className="w-full">
        <SettingsPageHeader />
      </div>
      <div className="flex flex-col items-center pt-5">
        <LoadFuriganaData />
      </div>
    </div>
  );
};
export default SettingsAdminPage;
