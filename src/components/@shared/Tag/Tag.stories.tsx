import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "Components/Shared/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => {
  return (
    <>
      {/* 공통 Tag */}
      <Tag iconType={"CommonReview1"}>넓고 깨끗해요</Tag>
      <Tag Reviews={40} iconType={"CommonReview2"}>
        주차하기 편해요
      </Tag>
      <Tag Reviews={12} iconType={"CommonReview3"}>
        뷰가 좋아요
      </Tag>
      <Tag Reviews={20} iconType={"CommonReview4"}>
        가성비가 좋아요
      </Tag>
      <Tag Reviews={30} iconType={"CommonReview5"}>
        사람이 많이 없어요
      </Tag>
      {/* 음식점 Tag */}
      <Tag Reviews={40} iconType={"FoodReview1"}>
        간단히 먹기 좋아요
      </Tag>
      <Tag Reviews={90} iconType={"FoodReview2"}>
        음식이 빨리나와요
      </Tag>
      <Tag Reviews={12} iconType={"FoodReview3"}>
        혼합 가능해요
      </Tag>
      <Tag Reviews={20} iconType={"FoodReview5"}>
        조용해요
      </Tag>
      <Tag Reviews={30} iconType={"FoodReview4"}>
        맛집이예요
      </Tag>
      {/* 까페 Tag */}
      <Tag Reviews={4} iconType={"CafeReview1"}>
        식사메뉴가 있어요
      </Tag>
      <Tag Reviews={90} iconType={"CafeReview2"}>
        와이파이가 빵빵해요
      </Tag>
      <Tag Reviews={12} iconType={"CafeReview3"}>
        콘센트 자리 많아요
      </Tag>
      <Tag Reviews={20} iconType={"CafeReview4"}>
        좌석이 업무하기 좋아요
      </Tag>
      <Tag Reviews={30} iconType={"CafeReview5"}>
        조용한 공간이 있어요
      </Tag>
      <Tag Reviews={40} iconType={"CafeReview6"}>
        집중이 잘 돼요
      </Tag>
    </>
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
