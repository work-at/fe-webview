import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MagazineGangWon from "./MagazineGangWon";

export default {
  title: "components/Pages/AccommPage/MagazineGangWon",
  component: MagazineGangWon,
} as ComponentMeta<typeof MagazineGangWon>;

const Template: ComponentStory<typeof MagazineGangWon> = () => <MagazineGangWon />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
