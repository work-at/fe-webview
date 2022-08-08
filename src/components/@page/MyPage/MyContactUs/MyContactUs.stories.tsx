import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyContactUs from "./MyContactUs";

export default {
  title: "components/Pages/MyPage/MyContactUs",
  component: MyContactUs,
} as ComponentMeta<typeof MyContactUs>;

const Template: ComponentStory<typeof MyContactUs> = () => <MyContactUs />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
