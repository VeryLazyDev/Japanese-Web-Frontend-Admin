export const GetLocalTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "";
};
