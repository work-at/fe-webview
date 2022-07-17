import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";
import UserImg1 from "@/assets/images/walkchat1.png";

export default {
  title: "Components/Shared/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.story = {
  args: {
    id: 1,
    imageUrl: UserImg1,
    title: "나는스벅아아좋아",
    leftSubTitle: "개발",
    rightSubTitle: "8년차",
    tags: ["주니어모여라", "개발같이해요", "열정맨"],
  },
};

Basic.play = async ({ canvasElement }: any) => {};
