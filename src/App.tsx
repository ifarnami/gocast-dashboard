import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import ThemeColorProvider from "./provider/ThemeColorProvider";

const App: React.FC = () => {
  return (
    <ThemeColorProvider>
      <RouterProvider router={router} />
    </ThemeColorProvider>
  );
};

export default App;
