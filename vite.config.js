import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/", // lokal udvikling
  };

  if (command !== "serve") {
    config.base = "/REACT-ROUTER/"; // produktion på GitHub Pages
  }

  return config;
});
