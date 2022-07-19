import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ReviewWrite from "./ReviewWrite";

export default {
  title: "components/Pages/ReviewWrite",
  component: ReviewWrite,
} as ComponentMeta<typeof ReviewWrite>;

const Template: ComponentStory<typeof ReviewWrite> = () => <ReviewWrite />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
