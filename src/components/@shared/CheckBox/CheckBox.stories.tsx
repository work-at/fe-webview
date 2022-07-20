import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "./CheckBox";

export default {
  title: "Components/Shared/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const DefaultType = Template.bind({});
DefaultType.args = {
  items: [
    {
      id: "chk1",
      label: "개발자",
    },
    {
      id: "chk2",
      label: "디자인",
    },
    {
      id: "chk3",
      label: "기획",
    },
  ],
};

export const IconType = Template.bind({});
IconType.args = {
  items: [
    {
      id: "chk1",
      label: "와이파이가\n빵빵해요",
      isIcon: true,
      iconType: "CommonReview1",
    },
    {
      id: "chk2",
      label: "가성비가\n좋아요",
      isIcon: true,
      iconType: "CommonReview2",
    },
  ],
};
