import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import LandingPage from "../pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof LandingPage>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const GetStarted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getStartedButton = canvas.getByTestId("get-started-button");
    await expect(getStartedButton).toBeInTheDocument();
    await userEvent.click(getStartedButton);
  },
};
