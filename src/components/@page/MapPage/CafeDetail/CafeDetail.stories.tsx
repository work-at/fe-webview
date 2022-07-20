import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CafeDetail from "./CafeDetail";

export default {
  title: "components/Pages/CafeDetail",
  component: CafeDetail,
} as ComponentMeta<typeof CafeDetail>;

const Template: ComponentStory<typeof CafeDetail> = () => <CafeDetail />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
