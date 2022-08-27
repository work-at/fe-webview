import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AccommList from "./AccommList";
import AccommImg from "@/assets/images/@dummy/@accomm-list.png";

export default {
  title: "components/Pages/AccommPage/AccommList",
  component: AccommList,
} as ComponentMeta<typeof AccommList>;

const Template: ComponentStory<typeof AccommList> = (args) => <AccommList {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    items: [
      {
        imageUrl: AccommImg,
        area: "seoul",
        name: "질그랭이센터 두줄 테스트 숙소 이름 두줄 테스트입니다 두줄 테스트",
        consecutivePrice: "1,329,000",
        dayPrice: "65,800",
        tags: ["주차하기편해요", "뷰가좋아요", "가성비가좋아요"],
      },
      {
        imageUrl: AccommImg,
        area: "jeju",
        name: "씨마크호텔",
        consecutivePrice: "329,000",
        dayPrice: "65,800",
        tags: ["교통이좋아요", "콘센트많아요", "조식가능해요"],
      },
      {
        imageUrl: AccommImg,
        area: "gangneung",
        name: "강원도 호텔",
        consecutivePrice: "12,429,000",
        dayPrice: "75,800",
        tags: ["조식가능해요", "방이청결해요", "침대가편해요"],
      },
      {
        imageUrl: AccommImg,
        area: "sokcho",
        name: "속초 호텔",
        consecutivePrice: "429,000",
        dayPrice: "75,800",
        tags: ["조식가능해요", "방이청결해요", "침대가편해요"],
      },
    ],
  },
};

// Basic.play = async ({ canvasElement }: any) => {};
