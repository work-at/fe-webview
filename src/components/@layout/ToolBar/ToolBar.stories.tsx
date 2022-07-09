import { Meta, Story } from "@storybook/react";
import { ToolBar } from "./ToolBar";

export default {
  title: "Components/Layout/ToolBar",
  component: ToolBar,
} as Meta;


const Template: Story = (args) => {

  return (
    <ToolBar {...args} />
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
