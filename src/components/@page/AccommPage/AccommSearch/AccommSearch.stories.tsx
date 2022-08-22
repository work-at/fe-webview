import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AccommSearch from "./AccommSearch";

export default {
  title: "components/Pages/AccommPage/AccommSearch",
  component: AccommSearch,
} as ComponentMeta<typeof AccommSearch>;

const Template: ComponentStory<typeof AccommSearch> = () => <AccommSearch />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
