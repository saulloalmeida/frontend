import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProfissionalContextProvider } from "./context/ProfissionalContext";
import { ProfissoesContextProvider } from "./context/ProfissoesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfissoesContextProvider>
        <ProfissionalContextProvider>
          <App />
        </ProfissionalContextProvider>
      </ProfissoesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
