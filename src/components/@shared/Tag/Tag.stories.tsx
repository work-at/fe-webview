import { Meta, Story } from "@storybook/react";

import Tag, { TagProps } from "./Tag";

export default {
  title: "Components/Shared/Tag",
  component: Tag,
} as Meta;

const Template: Story<TagProps> = () => <Tag>버튼</Tag>;

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
