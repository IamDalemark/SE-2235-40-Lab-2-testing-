import type { Meta, StoryObj } from "@storybook/react";

import ChangeDeckColorDialog from "@/components/Decks/ChangeDeckColorDialog";

const meta = {
  title: "Example/ChangeDeckColorDialog",
  component: ChangeDeckColorDialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ChangeDeckColorDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "red",
  render: (args) => <ChangeDeckColorDialog {...args} />,
  args: {
    id: "1000",
    deckName: "deckdeck",
    userId: "1000",
    cardCount: 5,
    color: "red",
    createdAt: "k",
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
