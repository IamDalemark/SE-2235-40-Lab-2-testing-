import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import SignUpButton from "../components/Landing/LandingHeaderComponents/SignUpButton";

const meta: Meta<typeof SignUpButton> = {
  title: "Components/SignUpButton",
  component: SignUpButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    color: { control: "select", options: ["green", "blue", "red"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    text: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof SignUpButton>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

export const Green: Story = { args: { color: "green" } };
export const Blue: Story = { args: { color: "blue" } };
export const Red: Story = { args: { color: "red" } };

export const CustomText: Story = { args: { text: "Registered" } };
