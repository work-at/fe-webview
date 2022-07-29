import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignUpIntro from "./SignUpIntro";

export default {
  title: "components/Pages/SignUpPage/SignUpIntro",
  component: SignUpIntro,
} as ComponentMeta<typeof SignUpIntro>;

const Template: ComponentStory<typeof SignUpIntro> = () => <SignUpIntro />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
