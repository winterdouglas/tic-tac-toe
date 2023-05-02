import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  cacheDir: ".vite",
  resolve: {
    alias: {
      "react-native": "react-native-web",
      // "styled-components": "styled-components/native",
    },
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
});
