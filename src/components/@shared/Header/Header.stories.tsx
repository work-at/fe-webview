import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "@/assets/Icon";
import Header from "./Header";

export default {
  title: "Components/Shared/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    bgColor: true,
    useBack: true,
    title: "제주 서귀포 남원읍",
    useRefresh: true,
  },
};

Basic.play = async ({ canvasElement }: any) => {};
