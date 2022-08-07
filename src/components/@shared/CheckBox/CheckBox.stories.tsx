import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "./CheckBox";
import { useMultiselect } from "./Hooks";

export default {
  title: "Components/Shared/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const { selected, onChange } = useMultiselect([]);
  return <CheckBox {...args} selectedItemIds={selected} onChange={onChange} />;
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

export const WithAutoType = Template.bind({});
WithAutoType.args = {
  widthAuto: true,
  items: [
    {
      id: "chk1",
      label: "주니어모여라",
    },
    {
      id: "chk2",
      label: "직무토크하실분",
    },
    {
      id: "chk3",
      label: "열정맨",
    },
    {
      id: "chk4",
      label: "시니어모여라",
    },
    {
      id: "chk5",
      label: "식사메이트구해요",
    },
    {
      id: "chk6",
      label: "같이 일해요",
    },
    {
      id: "chk7",
      label: "진로고민",
    },
  ],
};

export const IconType = Template.bind({});
IconType.args = {
  isIcon: true,
  items: [
    {
      id: "chk1",
      label: "와이파이가\n빵빵해요",
      iconType: "CommonReview1",
    },
    {
      id: "chk2",
      label: "가성비가\n좋아요",
      iconType: "CommonReview2",
    },
    {
      id: "chk3",
      label: "조용해요",
      iconType: "CafeReview5",
    },
  ],
};
