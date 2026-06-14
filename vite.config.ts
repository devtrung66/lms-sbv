import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Cau hinh Vite: bat React + alias @ tro vao thu muc src
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});