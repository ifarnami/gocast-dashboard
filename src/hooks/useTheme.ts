import { useMemo, useState } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import { getDesignTokens } from "../config/mui";


const useTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleThemeMode,
  };
};

export default useTheme;
