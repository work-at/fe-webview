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
      <Tag iconType={"CommonReview1"} children={"넓고 깨끗해요"} />
      <Tag Reviews={40} iconType={"CommonReview2"} children={"주차하기 편해요"} />
      <Tag Reviews={12} iconType={"CommonReview3"} children={"뷰가 좋아요"} />
      <Tag Reviews={20} iconType={"CommonReview4"} children={"가성비가 좋아요"} />
      <Tag Reviews={30} iconType={"CommonReview5"} children={"사람이 많이 없어요"} />
      {/* 음식점 Tag */}
      <Tag Reviews={40} iconType={"FoodReview1"} children={"간단히 먹기 좋아요"} />
      <Tag Reviews={90} iconType={"FoodReview2"} children={"음식이 빨리나와요"} />
      <Tag Reviews={12} iconType={"FoodReview3"} children={"혼합 가능해요"} />
      <Tag Reviews={20} iconType={"FoodReview5"} children={"조용해요"} />
      <Tag Reviews={30} iconType={"FoodReview4"} children={"맛집이예요"} />
      {/* 까페 Tag */}
      <Tag Reviews={4} iconType={"CafeReview1"} children={"식사메뉴가 있어요"} />
      <Tag Reviews={90} iconType={"CafeReview2"} children={"와이파이가 빵빵해요"} />
      <Tag Reviews={12} iconType={"CafeReview3"} children={"콘센트 자리 많아요"} />
      <Tag Reviews={20} iconType={"CafeReview4"} children={"좌석이 업무하기 좋아요"} />
      <Tag Reviews={30} iconType={"CafeReview5"} children={"조용한 공간이 있어요"} />
      <Tag Reviews={40} iconType={"CafeReview6"} children={"집중이 잘 돼요"} />
    </>
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
