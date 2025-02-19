import type { Meta, StoryObj } from "@storybook/react";

import ChangeDeckColorDialog from "@/components/Decks/ChangeDeckColorDialog";

const meta = {
  title: "Component/ChangeDeckColorDialog",
  component: ChangeDeckColorDialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChangeDeckColorDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Red",
  render: (args) => <ChangeDeckColorDialog {...args} />,
  args: {
    id: "1000",
    deckName: "Testing Deck",
    userId: "1000",
    cardCount: 5,
    color: "red",
    createdAt: "2024-12-21 01:09:08.879055",
  },
};

export const Blue: Story = {
  render: (args) => <ChangeDeckColorDialog {...args} />,
  args: {
    ...Primary.args,
    color: "blue",
  },
};

export const Green: Story = {
  render: (args) => <ChangeDeckColorDialog {...args} />,
  args: {
    ...Primary.args,
    color: "green",
  },
};
