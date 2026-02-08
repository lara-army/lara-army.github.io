// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import path from "path";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve("./src"),
      },
    },
  },

  integrations: [svelte()],
});