import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyPageMain from "./MyPageMain";

export default {
  title: "components/Pages/MyPage/MyPageMain",
  component: MyPageMain,
} as ComponentMeta<typeof MyPageMain>;

const Template: ComponentStory<typeof MyPageMain> = () => <MyPageMain />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
