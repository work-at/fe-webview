import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Shared/Button",
  component: Button,
} as Meta;

// 기본 포맷을 정해두고 bind로 제어
const Template: Story<ButtonProps> = (args) => {
  const [isActive, setActive] = useState(false);

  return <Button {...args} />;
};

// onClick={() => setActive((isActive) => !isActive)}
// export const Basic = Template.bind({});

//const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// 각각이 새로운 스토리들
// export const Small = () => <Button size="small" label="button" />; 얘와 같음
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
