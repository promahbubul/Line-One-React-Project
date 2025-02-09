import Layout from "@/layout";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  }
]);

export default routes;
