import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404 Page not found!</h1>,
  },
  {
    path: "/",
  },
  {
    path: "/users",
  },
]);
