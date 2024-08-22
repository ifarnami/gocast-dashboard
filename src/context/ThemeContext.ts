import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext } from "react";

export type ThemeContext = {
  mode: string;
  toggleThemeMode: () => void;
  theme: Theme;
};

export const themeContext = createContext<ThemeContext>({
  mode: "light",
  toggleThemeMode: () => {},
  theme: createTheme(),
});
