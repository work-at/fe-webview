import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "@/assets/Icon";
import Button from "./Button";

export default {
  title: "Components/Shared/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
  return (
    <>
      <Button size="lg" bgColor="black">
        버튼 텍스트
      </Button>
      <Button size="md" bgColor="gray" round>
        텍스트
      </Button>
      <Button size="sm" round>
        작은 버튼 텍스트
      </Button>
      <Button size="sm" round active>
        작은 버튼 활성화
      </Button>
    </>
  );
};

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => {};
