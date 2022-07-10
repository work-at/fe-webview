import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    // label: { type: "text" },
  },
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
  label: "작은버튼",
  shadow: true,
};

export const Middle = Template.bind({});
Middle.args = {
  size: "md",
  bgColor: "blue",
  label: "중간버튼",
  shadow: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  bgColor: "white",
  label: "큰버튼",
  shadow: true,
};
