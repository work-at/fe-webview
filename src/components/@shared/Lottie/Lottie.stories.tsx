import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Lottie from "./Lottie.component";

export default {
  title: "components/Lottie",
  component: Lottie,
} as ComponentMeta<typeof Lottie>;

const Template: ComponentStory<typeof Lottie> = (args) => <Lottie {...args} />;

export const Test = Template.bind({});
Test.args = {
  source: require("~/assets/loading.json"),
};
