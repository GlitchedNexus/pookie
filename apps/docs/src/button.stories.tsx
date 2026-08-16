import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@glitchednexus/pookie";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Save changes",
    isLoading: false,
    size: "medium",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    children: "Small action",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Continue",
    size: "large",
  },
};

export const Loading: Story = {
  args: {
    children: "Save changes",
    isLoading: true,
    loadingText: "Saving",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};
