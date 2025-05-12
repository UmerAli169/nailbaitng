import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Wrapper from "./layout";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);
