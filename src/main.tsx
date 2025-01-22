import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import routes from "routes/routes";
import "assets/css/index.css";
import "core/core";

// Menemukan root element dan merender aplikasi dengan HelmetProvider
const root = document.getElementById("root")!;
createRoot(root).render(
  <HelmetProvider>
    <RouterProvider router={routes} />
  </HelmetProvider>
);
