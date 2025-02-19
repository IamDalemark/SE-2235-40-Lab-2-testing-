import type { Meta, StoryObj } from "@storybook/react";

import UserManualCard from "@/components/Landing/UserManualCard";

const meta = {
  title: "Component/UserManualCard",
  component: UserManualCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserManualCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "upload notes",
  render: (args) => <UserManualCard {...args} />,
  args: {
    image: "./upload.png",
    alt: "Upload Notes",
    title: "1. Upload",
    description:
      "Easily upload your notes in various formats - PDFs, images, text documents",
  },
};
export const Secondary: Story = {
  name: "review",
  render: (args) => <UserManualCard {...args} />,
  args: {
    image: "./review.png",
    alt: "Review Content",
    title: "3. Review",
    description:
      "Review and interact with AI-generated content to enhance your learning",
  },
};
export const Tertiary: Story = {
  name: "generate",
  render: (args) => <UserManualCard {...args} />,
  args: {
    image: "./generate.png",
    alt: "Generate Content",
    title: "2. Generate",
    description:
      "Get auto-generated summaries, relevant videos, and interactive flashcards",
  },
};
