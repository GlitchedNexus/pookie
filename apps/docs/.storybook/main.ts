import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const librarySource = resolve(
  import.meta.dirname,
  "../../../packages/react/src",
);

const config = {
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      plugins: [tailwindcss()],
      resolve: {
        alias: [
          {
            find: /^@glitchednexus\/pookie\/styles\.css$/,
            replacement: resolve(librarySource, "styles.css"),
          },
          {
            find: /^@glitchednexus\/pookie$/,
            replacement: resolve(librarySource, "index.ts"),
          },
        ],
      },
    });
  },
} satisfies StorybookConfig;

export default config;
