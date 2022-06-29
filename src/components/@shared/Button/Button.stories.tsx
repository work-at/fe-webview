import { Meta, Story } from "@storybook/react";
import { within } from "@storybook/testing-library";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Shared/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = () => <Button>버튼</Button>;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
