import {
  applicationMoreMenuData,
  componentsMenuData,
  dashboardMoreMenuData,
  elementsMenuData,
  formMenuData,
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
    children: sideMenuData.map(({ path }) => ({
      path: path,
      element: <Outlet />,
      children:
        path === "/dashboards"
          ? dashboardMoreMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/elements"
          ? elementsMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/components"
          ? componentsMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/forms"
          ? formMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
                path: path,
                element: element(),
              })),
            }))
          : path === "/applications"
          ? applicationMoreMenuData.map(({ menu }) => ({
              path: "",
              element: <Outlet />,
              children: menu.map(({ path, element }) => ({
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
