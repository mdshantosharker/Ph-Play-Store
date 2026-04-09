import { createBrowserRouter } from "react-router";
import ErrorPage from "../ui/ErrorPage/ErrorPage";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Pages/Homepage/HomePage";
import Apps from "../Pages/Apps/Apps";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";
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
        path: "/installedApps",
        element: <InstalledApps></InstalledApps>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
