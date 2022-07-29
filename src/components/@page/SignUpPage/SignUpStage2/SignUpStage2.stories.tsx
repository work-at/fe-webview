import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignUpStage2 from "./SignUpStage2";

export default {
  title: "components/Pages/SignUpPage/SignUpStage2",
  component: SignUpStage2,
} as ComponentMeta<typeof SignUpStage2>;

const Template: ComponentStory<typeof SignUpStage2> = () => <SignUpStage2 />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
