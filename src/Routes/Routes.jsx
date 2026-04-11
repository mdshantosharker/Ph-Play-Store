import { createBrowserRouter } from "react-router";
import ErrorPage from "../ui/ErrorPage/ErrorPage";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/Homepage/HomePage";
import Apps from "../Pages/Apps/Apps";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import DashBoard from "../Pages/dashboard/DashBoard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/data.json"),
        element: <AppDetails></AppDetails>,
      },

      {
        path: "/installedApps",
        element: <InstalledApps></InstalledApps>,
      },
      {
        path: "/dashboard",
        loader: () => fetch("/data.json"),
        element: <DashBoard></DashBoard>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
