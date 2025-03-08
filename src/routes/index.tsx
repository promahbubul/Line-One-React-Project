/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  applicationMoreMenuData,
  dashboardMoreMenuData,
  elementsMenuData,
} from "@/constant/moreMenu.constant";
import { sideMenuData } from "@/constant/sideMenu.constant";
import Layout from "@/layout";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter, Outlet } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: sideMenuData.map(({ path, title }) => ({
      path: path,
      element: <Outlet />,
      children:
        path === "/dashboards"
          ? dashboardMoreMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, title, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/elements"
          ? elementsMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, title, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : [],
    })),
  },
]);

export default routes;
// div > div