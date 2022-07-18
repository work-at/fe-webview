import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import PlaceView from "./PlaceView";

export default {
  title: "components/Pages/PlaceView",
  component: PlaceView,
} as ComponentMeta<typeof PlaceView>;

const Template: ComponentStory<typeof PlaceView> = () => <PlaceView />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
