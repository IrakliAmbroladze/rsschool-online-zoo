import { createRoot } from "react-dom/client";
import "./styles/scss/main.scss";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavouritesProvider } from "./context/FavoritesProvider";
import { PetsProvider } from "./context/PetsProvider";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <FavouritesProvider>
      <PetsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PetsProvider>
    </FavouritesProvider>
  </StrictMode>,
);
