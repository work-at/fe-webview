import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AccommMain from "./AccommMain";
import AccommImg from "@/assets/images/@dummy/@accomm-list.png";

export default {
  title: "components/Pages/AccommPage/AccommMain",
  component: AccommMain,
} as ComponentMeta<typeof AccommMain>;

const Template: ComponentStory<typeof AccommMain> = (args) => <AccommMain {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    items: [
      {
        imageUrl: AccommImg,
        area: "seoul",
        name: "질그랭이센터 두줄 테스트 숙소 이름 두줄 테스트입니다 두줄 테스트",
      },
      {
        imageUrl: AccommImg,
        area: "jeju",
        name: "질그랭이센터",
      },
      {
        imageUrl: AccommImg,
        area: "gangWon",
        name: "질그랭이센터",
      },
    ],
  },
};

// Basic.play = async ({ canvasElement }: any) => {};
