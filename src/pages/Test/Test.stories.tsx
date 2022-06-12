import { ComponentStory, ComponentMeta } from "@storybook/react";
import Test from "./Test";

export default {
  title: "components/test",
  component: Test,
} as ComponentMeta<typeof Test>;

export const Template: ComponentStory<typeof Test> = () => <Test />;
