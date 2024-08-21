import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

const useThemeContext = () => {
  return useContext(themeContext);
};

export default useThemeContext;
