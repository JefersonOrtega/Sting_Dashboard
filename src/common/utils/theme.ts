const theme = (() => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("theme")
  ) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return themeTypes.dark;
  }
  return themeTypes.light;
})();

export default theme;