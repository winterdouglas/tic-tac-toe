import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  cacheDir: ".vite",
  resolve: {
    alias: [
      { find: "~", replacement: "/../../" },
      { find: "@", replacement: "/src/" },
    ],
    extensions: [
      ".web.ts",
      ".web.tsx",
      ".web.js",
      ".web.jsx",
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
    ],
  },
});
