import { ComponentMeta, ComponentStory } from "@storybook/react";
import EmailInput from "./EmailInput";

export default {
  title: "Components/Shared/EmailInput",
  component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => <EmailInput {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    placeholder: "이메일 입력",
  },
};

// Basic.play = async ({ canvasElement }: any) => {};
