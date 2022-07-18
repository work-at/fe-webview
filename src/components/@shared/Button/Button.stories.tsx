import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Icon } from "@/assets/Icon";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Shared/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = () => {
  return (
    <>
      <Button size="lg" bgColor="black">
        버튼 텍스트
      </Button>
      <Button size="sm" bgColor="white" shadow radius>
        <Icon icon={"BtnList"} size={14} /> 아이콘 + 텍스트
      </Button>
    </>
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
