import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import User from "../pages/User";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404 Page not found!</h1>,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <User />,
  },
]);
