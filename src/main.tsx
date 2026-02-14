import Aos from "aos";
import "aos/dist/aos.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./styles/globals.css";

Aos.init({
  duration: 500,
  once: true,
  offset: 100,
  delay: 0,
  easing: "ease-in-out",
  mirror: false,
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
