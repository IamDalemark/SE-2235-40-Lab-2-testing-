import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import LandingPage from "../pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  parameters: {
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

export const GetStarted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getStartedButton = canvas.getByTestId("get-started-button");
    await expect(getStartedButton).toBeInTheDocument();
  },
};

export const starLearningNow: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const startLeaningNowButton = canvas.getByTestId(
      "start-learning-now-button",
    );
    await expect(startLeaningNowButton).toBeInTheDocument();
    await userEvent.click(startLeaningNowButton);
    await expect(startLeaningNowButton).not.toBeVisible();
  },
};

export const navigationAbout: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutButton = canvas.getByTestId("about-button");
    await expect(aboutButton).toBeInTheDocument();
    await userEvent.click(aboutButton);
    await expect(aboutButton).toBeVisible();
  },
};
export const whatIsNoteTubeAccordion: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const whatIsNoteTubeAccordionTrigger = canvas.getByTestId(
      "what-is-notetube-accordion-trigger",
    );
    const whatIsNoteTubeAccordionContent = canvas.getByTestId(
      "what-is-notetube-accordion-content",
    );
    await expect(whatIsNoteTubeAccordionContent).toBeInTheDocument();
    await expect(whatIsNoteTubeAccordionTrigger).toBeInTheDocument();
    await userEvent.click(whatIsNoteTubeAccordionTrigger);
    await expect(whatIsNoteTubeAccordionContent).not.toBeVisible();
    await userEvent.click(whatIsNoteTubeAccordionTrigger);
    await expect(whatIsNoteTubeAccordionContent).toBeVisible();
  },
};
