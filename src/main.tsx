import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import {theme} from "./Theme";
import CashProvider from "./CashProvider.tsx"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}> 
 <CashProvider>
        <App />
        </CashProvider>
    </ThemeProvider>
    
  </StrictMode>
);