import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ important for correct relative paths on Vercel
  build: {
    outDir: "dist", // Vercel expects this
  },
});
