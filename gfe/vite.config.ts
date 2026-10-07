import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // generates sourcemaps for production builds
  },
  server: {
    sourcemapIgnoreList: false, // ensures DevTools doesn't treat app files as third-party
  },
  css: {
    devSourcemap: true, // enables CSS sourcemaps if needed
  },
});
