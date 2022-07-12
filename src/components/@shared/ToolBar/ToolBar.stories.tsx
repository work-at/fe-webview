import { Meta, Story } from "@storybook/react";
import ToolBar from "./ToolBar";

export default {
  title: "components/Shared/ToolBar",
  component: ToolBar,
} as Meta;

const Template: Story = () => <ToolBar />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
