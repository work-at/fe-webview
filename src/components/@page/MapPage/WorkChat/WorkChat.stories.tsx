import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkChat from "./WorkChat";

export default {
  title: "components/Pages/MapPage/WorkChat",
  component: WorkChat,
} as ComponentMeta<typeof WorkChat>;

const Template: ComponentStory<typeof WorkChat> = () => <WorkChat />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
