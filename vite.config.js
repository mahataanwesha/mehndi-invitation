import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mehndi-invitation/", // GitHub Pages needs the repo name as base
  build: {
    outDir: "dist", // default Vite build folder
  },
});
