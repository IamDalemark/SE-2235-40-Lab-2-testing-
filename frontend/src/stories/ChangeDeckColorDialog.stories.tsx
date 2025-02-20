import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import ChangeDeckColorDialog from "@/components/Decks/ChangeDeckColorDialog";

const meta = {
  title: "Components/ChangeDeckColorDialog",
  component: ChangeDeckColorDialog,
  parameters: {
    layout: "centered",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutButton = canvas.getByTestId("change-color-trigger");
    await expect(aboutButton).toBeInTheDocument();
    await userEvent.click(aboutButton);
  },
} satisfies Meta<typeof ChangeDeckColorDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Select Red",
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

export const SelectBlue: Story = {
  render: (args) => <ChangeDeckColorDialog {...args} />,
  args: {
    ...Primary.args,
    color: "blue",
  },
};

export const SelectGreen: Story = {
  render: (args) => <ChangeDeckColorDialog {...args} />,
  args: {
    ...Primary.args,
    color: "green",
  },
};
