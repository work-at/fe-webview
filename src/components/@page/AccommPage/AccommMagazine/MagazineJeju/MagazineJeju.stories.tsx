import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MagazineJeju from "./MagazineJeju";

export default {
  title: "components/Pages/AccommPage/MagazineJeju",
  component: MagazineJeju,
} as ComponentMeta<typeof MagazineJeju>;

const Template: ComponentStory<typeof MagazineJeju> = () => <MagazineJeju />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
