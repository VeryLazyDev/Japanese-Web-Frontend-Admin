import "./config/i18next.js";
import "./styles/index.css";
import { createRoot } from "react-dom/client";
import Providers from "./components/providers";
import { RouterProvider } from "react-router-dom";
import router from "./app/routes/route";
import { AnimationProvider } from "./context/animation-provider";
import { ThemeProvider } from "./context/theme-provider";
createRoot(document.getElementById("root")).render(
  <Providers>
    <AnimationProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AnimationProvider>
  </Providers>,
);
