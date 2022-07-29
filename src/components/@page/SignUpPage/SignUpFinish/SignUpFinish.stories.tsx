import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignUpFinish from "./SignUpFinish";

export default {
  title: "components/Pages/SignUpPage/SignUpFinish",
  component: SignUpFinish,
} as ComponentMeta<typeof SignUpFinish>;

const Template: ComponentStory<typeof SignUpFinish> = () => <SignUpFinish />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
