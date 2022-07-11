import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import ListCard, { ListCardProps } from "./ListCard";

export default {
  title: "Components/Shared/ListCard",
  component: ListCard,
} as Meta;

const Template: Story<ListCardProps> = () => (
  <ListCard
    items={[
      {
        nickname: "나는스벅아아좋아",
        job: "개발",
        year: "8",
        act: ["주니어모여라", "개발같이해요", "열정맨"],
      },
      {
        nickname: "내가제일잘나가",
        job: "기획",
        year: "1",
        act: ["시니어모여라", "이커머스함께해요"],
      },
      {
        nickname: "나는나는나다",
        job: "디자인",
        year: "2",
        act: ["퇴근후함께놀아요", "스타트업함께해요", "디자인같이해요"],
      },
    ]}
  />
);

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
