import { Meta, Story } from "@storybook/react";
import NavigationToolBar from "./NavigationToolBar";

export default {
  title: "components/NavigationToolBar",
  component: NavigationToolBar,
} as Meta;

const Template: Story = () => <NavigationToolBar navigationPath="accommodation" />;

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => { };
