import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "components/Shared/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Template: ComponentStory<typeof Spinner> = () => <Spinner />;
