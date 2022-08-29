import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AccommDetail from "./AccommDetail";

export default {
  title: "components/Pages/AccommPage/AccommDetail",
  component: AccommDetail,
} as ComponentMeta<typeof AccommDetail>;

const Template: ComponentStory<typeof AccommDetail> = () => <AccommDetail />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
