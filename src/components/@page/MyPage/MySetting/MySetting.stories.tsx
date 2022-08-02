import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MySetting from "./MySetting";

export default {
  title: "components/Pages/MyPage/MySetting",
  component: MySetting,
} as ComponentMeta<typeof MySetting>;

const Template: ComponentStory<typeof MySetting> = () => <MySetting />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
