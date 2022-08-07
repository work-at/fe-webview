import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkChatList from "./WorkChatList";
import UserImg from "@/assets/images/walkchat2.png";

export default {
  title: "components/Pages/MapPage/WorkChatList",
  component: WorkChatList,
} as ComponentMeta<typeof WorkChatList>;

const Template: ComponentStory<typeof WorkChatList> = (args) => <WorkChatList {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    items: [
      {
        newMsg: true,
        imageUrl: UserImg,
        nickName: "아메리카노좋아",
        job: "개발",
        year: "1-2년차",
        msg: "혹시 워케이션 같이 해도 같이 될까요? 괜찮으시면 연락 부탁드려요!",
      },
      {
        imageUrl: UserImg,
        nickName: "아메리카노좋아",
        job: "개발",
        year: "1-2년차",
        msg: "혹시 워케이션 같이 해도 같이 될까요? 괜찮으시면 연락 부탁드려요!",
      },
    ],
  },
};

// Basic.play = async ({ canvasElement }: any) => {};
