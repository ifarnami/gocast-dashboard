import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404 Page not found!</h1>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
  },
]);
