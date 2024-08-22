import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import CacheProvider  from "./provider/CacheProvider";
import ThemeColorProvider from "./provider/ThemeColorProvider";

const App: React.FC = () => {
  return (
    <ThemeColorProvider>
      <CacheProvider> 
      <RouterProvider router={router} />
      </CacheProvider>
    </ThemeColorProvider>
  );
};

export default App;
