import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignUpStage1 from "./SignUpStage1";

export default {
  title: "components/Pages/SignUpPage/SignUpStage1",
  component: SignUpStage1,
} as ComponentMeta<typeof SignUpStage1>;

const Template: ComponentStory<typeof SignUpStage1> = () => <SignUpStage1 />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
