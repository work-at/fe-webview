import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyEmailCerti from "./MyEmailCerti";

export default {
  title: "components/Pages/MyPage/MyEmailCerti",
  component: MyEmailCerti,
} as ComponentMeta<typeof MyEmailCerti>;

const Template: ComponentStory<typeof MyEmailCerti> = () => <MyEmailCerti />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
