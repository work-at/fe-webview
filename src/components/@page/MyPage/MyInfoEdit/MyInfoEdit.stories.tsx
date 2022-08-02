import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyInfoEdit from "./MyInfoEdit";

export default {
  title: "components/Pages/MyPage/MyInfoEdit",
  component: MyInfoEdit,
} as ComponentMeta<typeof MyInfoEdit>;

const Template: ComponentStory<typeof MyInfoEdit> = () => <MyInfoEdit />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
