import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MagazineSeoul from "./MagazineSeoul";

export default {
  title: "components/Pages/AccommPage/MagazineSeoul",
  component: MagazineSeoul,
} as ComponentMeta<typeof MagazineSeoul>;

const Template: ComponentStory<typeof MagazineSeoul> = () => <MagazineSeoul />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
