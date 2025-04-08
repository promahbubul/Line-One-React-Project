import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.tsx";
import "react-tooltip/dist/react-tooltip.css";
import AnimatedCursor from "react-animated-cursor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
    {/* <AnimatedCursor
     outerSize={50}
     outerScale={2}
    /> */}
  </StrictMode>
);
