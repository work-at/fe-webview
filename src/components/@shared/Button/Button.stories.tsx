import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Shared/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  bgColor: "black",
  shadow: true,
  children: "작은버튼",
};

export const Middle = Template.bind({});
Middle.args = {
  size: "md",
  bgColor: "blue",
  shadow: true,
  children: "중간버튼",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  bgColor: "white",
  shadow: true,
  children: "큰버튼",
};
