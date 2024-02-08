import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import million from "million/compiler";
import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://demo.devopsick.com/",
  output: "hybrid",
  vite: {
    plugins: [
      yaml(),
      million.vite({
        mode: "react",
        server: true,
        auto: {
          threshold: 0.05,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
    ],
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({
      entryLimit: 10000,
    }),
    react(),
    mdx(),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
