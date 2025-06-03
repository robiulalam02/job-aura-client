import { createBrowserRouter } from "react-router";
import Main_Layout from "../layout/Main_Layout";
import Home from "../pages/Home";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Job_Details from "../components/Job_Details/Job_Details";
import Private_route from "../layout/Private_route";
import Job_Apply from "../components/Job_Apply/Job_Apply";
import My_Applications from "../components/My_Applications/My_Applications";
import CreateJobs from "../pages/CreateJobs/CreateJobs";
import MyJobs from "../pages/MyJobs/MyJobs";

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
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <Private_route>
          <Job_Apply></Job_Apply>
        </Private_route>
      },
      {
        path: '/myApplications',
        loader: () => fetch('http://localhost:3000/applications'),
        element: <Private_route>
          <My_Applications></My_Applications>
        </Private_route>
      },
      {
        path: '/addJobs',
        element: <Private_route>
          <CreateJobs />
        </Private_route>
      },
      {
        path: '/myJobs',
        element: <Private_route>
          <MyJobs />
        </Private_route>
      }
    ]
  },
]);