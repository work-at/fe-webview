import { Meta, Story } from "@storybook/react";
import ToolBar from "./ToolBar";

export default {
  title: "components/Layout/ToolBar",
  component: ToolBar,
} as Meta<typeof ToolBar>;

export const Template: Story<typeof ToolBar> = () => <ToolBar />;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
