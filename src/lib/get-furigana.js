const IsFuriganaLoaded = () => {
  const bol = localStorage.getItem("furigana-loaded");
  return JSON.parse(bol) == true;
};
export { IsFuriganaLoaded };
