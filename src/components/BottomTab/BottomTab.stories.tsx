import { ComponentStory, ComponentMeta } from "@storybook/react";
import BottomTab from "./BottomTab";

export default {
  title: "components/BottomTab",
  component: BottomTab,
} as ComponentMeta<typeof BottomTab>;

export const Template: ComponentStory<typeof BottomTab> = () => <BottomTab />;
