import { createBrowserRouter } from "react-router";
import Main_Layout from "../layout/Main_Layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main_Layout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
]);