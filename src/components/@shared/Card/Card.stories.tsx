import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";
import UserImg1 from "@/assets/images/walkchat1.png";

export default {
  title: "Components/Shared/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const StoreType = Template.bind({});
StoreType.story = {
  args: {
    id: 1,
    type: "cafe",
    imageUrl: UserImg1,
    title: "제주도까페이름이름이름까페이름",
    reviewNum: 340,
    addr: "제주 서귀포 주소 제주 서귀포 주소",
    tags: ["와이파이빵빵해요", "콘센트많아요", "좌석이편해요"],
  },
};

export const UserType = Template.bind({});
UserType.story = {
  args: {
    id: 2,
    type: "worker",
    imageUrl: UserImg1,
    title: "나는스벅라떼좋아",
    job: "개발",
    year: "1-2년차",
    tags: ["개발같이해요", "직무토크하실분", "퇴근후함께놀아요"],
  },
};
