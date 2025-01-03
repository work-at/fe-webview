import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "Components/Shared/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} onSelect={(id) => alert(`id: ${id}의 탭 아이템이 선택됨`)} />
);

export const Basic = Template.bind({});
Basic.story = {
  args: {
    items: [
      {
        id: "1",
        label: "탭1",
      },
      {
        id: "2",
        label: "탭2",
      },
      {
        id: "3",
        label: "탭3",
      },
    ],
  },
};

Basic.play = async ({ canvasElement }: any) => {
  // 탭 아이템을 선택 시에 Tab Indicator 가 선택된 탭 아이템의 위치로 이동한다.
  // 탭 아이템이 선택되면 onTabSelect 핸들러가 동작하며 해당 핸들러는 선택된 탭 아이템의 id 를 매개변수로 받는다.
};
