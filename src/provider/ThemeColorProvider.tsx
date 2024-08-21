import { PropsWithChildren } from "react";
import { themeContext } from "../context/ThemeContext";
import useTheme from "../hooks/useTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

const ThemeColorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const value = useTheme();

  return (
    <themeContext.Provider value={value}>
      <ThemeProvider theme={value.theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export default ThemeColorProvider;
