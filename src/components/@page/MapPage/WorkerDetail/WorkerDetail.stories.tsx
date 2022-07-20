import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkerDetail from "./WorkerDetail";

export default {
  title: "components/Pages/WorkerDetail",
  component: WorkerDetail,
} as ComponentMeta<typeof WorkerDetail>;

const Template: ComponentStory<typeof WorkerDetail> = () => <WorkerDetail />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
