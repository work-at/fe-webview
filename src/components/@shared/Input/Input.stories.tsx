import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Shared/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    placeholder: "닉네임 입력",
    count: true,
    doubleChk: true,
  },
};

Basic.play = async ({ canvasElement }: any) => {};
