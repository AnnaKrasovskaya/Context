import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextComponent } from "./context/ContextTodo";
import "./style/index.css";
import App from "./app/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextComponent>
        <App />
      </ContextComponent>
    </BrowserRouter>
  </StrictMode>
);
