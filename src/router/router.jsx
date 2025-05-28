import { createBrowserRouter } from "react-router";
import Main_Layout from "../layout/Main_Layout";
import Home from "../pages/Home";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main_Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/auth/registration',
        Component: Registration
      },
      {
        path: '/auth/login',
        Component: Login
      }
    ]
  },
]);