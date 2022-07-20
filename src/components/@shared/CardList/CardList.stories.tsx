import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardList from "./CardList";

import UserImg1 from "@/assets/images/walkchat1.png";
import UserImg2 from "@/assets/images/walkchat2.png";
import UserImg3 from "@/assets/images/walkchat3.png";

export default {
  title: "Components/Shared/CardList",
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    items: [
      {
        id: 1,
        type: "store",
        imageUrl: UserImg1,
        title: "제주도까페이름이름이름까페이름",
        reviewNum: 340,
        addr: "제주 서귀포 주소 제주 서귀포 주소",
        tags: ["와이파이빵빵해요", "콘센트많아요", "좌석이편해요"],
      },
      {
        id: 2,
        type: "worcationer",
        imageUrl: UserImg2,
        title: "나는스벅라떼좋아",
        job: "개발",
        year: "1-2년차",
        tags: ["개발같이해요", "직무토크하실분", "퇴근후함께놀아요"],
      },
      {
        id: 3,
        type: "worcationer",
        imageUrl: UserImg3,
        title: "나는스벅아아좋아",
        job: "디자이너",
        year: "1-2년차",
        tags: ["개발같이해요", "직무토크하실분", "퇴근후함께놀아요"],
      },
    ],
  },
};

Basic.play = async ({ canvasElement }: any) => {};
