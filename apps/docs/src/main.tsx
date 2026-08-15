import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import "@glitchednexus/pookie/styles.css";
import "./styles.css";

const root = document.querySelector<HTMLDivElement>("#root");

if (!root) {
  throw new Error("Root element was not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
