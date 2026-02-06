const IsFuriganaLoaded = () => {
    const bol = localStorage.getItem("furigana_loaded");
    return bol == true;
};
export { IsFuriganaLoaded };
