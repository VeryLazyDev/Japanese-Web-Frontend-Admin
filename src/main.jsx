import "./config/i18next.js";
import "./styles/index.css";
import { createRoot } from "react-dom/client";
import Providers from "./components/providers";
import { RouterProvider } from "react-router-dom";
import router from "./app/routes/route";
import { AnimationProvider } from "./context/animation-provider";
import { ThemeProvider } from "./context/theme-provider";
import { LanguageProvider } from "./context/language-provider.jsx";
import { DialogProvider } from "./context/dialog-provider.jsx";
createRoot(document.getElementById("root")).render(
  <Providers>
    <LanguageProvider>
      <AnimationProvider>
        <ThemeProvider>
          <DialogProvider>
            <RouterProvider router={router} />
          </DialogProvider>
        </ThemeProvider>
      </AnimationProvider>
    </LanguageProvider>
  </Providers>,
);
