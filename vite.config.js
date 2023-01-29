import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  appType: "mpa",
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: "/src/components",
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
