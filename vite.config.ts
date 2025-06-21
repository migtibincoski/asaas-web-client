import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/asaas-web-client",
  build: {
    outDir: "build",
    cssMinify: true,
  },
});
