import type { Preview } from "@storybook/react-vite";

import "@glitchednexus/pookie/styles.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ["Introduction", "Components"],
      },
    },
  },
} satisfies Preview;

export default preview;
