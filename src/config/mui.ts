import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

type GetDesignTokens = (mode: PaletteMode) => ThemeOptions;

export const getDesignTokens: GetDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#5041BC" },
          divider: "#8A7DD0",
          text: {
            primary: "#5041BC",
            secondary: "#797D8C",
            white: "#FFFFFF",
            black: "#000000",
          },
        }
      : {
          primary: { main: "#242038" },
          secondary: { main: "#E76374" },
          divider: "#3A364C",
          text: {
            primary: "#797D8C",
            white: "#FFFFFF",
          },
        }),
  },
});
