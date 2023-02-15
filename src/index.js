import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateContext";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
