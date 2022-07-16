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
        imageUrl: UserImg1,
        nickname: "나는스벅아아좋아",
        job: "개발",
        year: "8",
        acts: ["주니어모여라", "개발같이해요", "열정맨"],
      },
      {
        id: 2,
        imageUrl: UserImg2,
        nickname: "내가제일잘나가",
        job: "기획",
        year: "1",
        acts: ["시니어모여라", "이커머스함께해요"],
      },
      {
        id: 3,
        imageUrl: UserImg3,
        nickname: "나는나는나다",
        job: "디자인",
        year: "2",
        acts: ["퇴근후함께놀아요", "스타트업함께해요", "디자인같이해요"],
      },
    ],
  },
};

Basic.play = async ({ canvasElement }: any) => {};
