import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import { router } from "./routes/router";
import "./styles/variables.css";
import "./styles/layout.css";
import "./styles/typography.css";
import "./styles/globals.css";
import "./styles/animations.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
