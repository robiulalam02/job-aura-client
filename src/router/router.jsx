import { createBrowserRouter } from "react-router";
import Main_Layout from "../layout/Main_Layout";
import Home from "../pages/Home";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Job_Details from "../components/Job_Details/Job_Details";

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
      },
      {
        path: '/jobs/:id',
        Component: Job_Details,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      }
    ]
  },
]);