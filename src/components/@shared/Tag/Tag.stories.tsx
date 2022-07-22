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
      <Tag reviews={100} iconType={"CommonReview2"}>
        주차하기 편해요
      </Tag>
      <Tag reviews={12} iconType={"CommonReview3"}>
        뷰가 좋아요
      </Tag>
      <Tag reviews={20} iconType={"CommonReview4"}>
        가성비가 좋아요
      </Tag>
      <Tag reviews={30} iconType={"CommonReview5"}>
        사람이 많이 없어요
      </Tag>
      {/* 음식점 Tag */}
      <Tag reviews={40} iconType={"FoodReview1"}>
        간단히 먹기 좋아요
      </Tag>
      <Tag reviews={90} iconType={"FoodReview2"}>
        음식이 빨리나와요
      </Tag>
      <Tag reviews={12} iconType={"FoodReview3"}>
        혼합 가능해요
      </Tag>
      <Tag reviews={20} iconType={"FoodReview5"}>
        조용해요
      </Tag>
      <Tag reviews={30} iconType={"FoodReview4"}>
        맛집이예요
      </Tag>
      {/* 까페 Tag */}
      <Tag reviews={4} iconType={"CafeReview1"}>
        식사메뉴가 있어요
      </Tag>
      <Tag reviews={90} iconType={"CafeReview2"}>
        와이파이가 빵빵해요
      </Tag>
      <Tag reviews={12} iconType={"CafeReview3"}>
        콘센트 자리 많아요
      </Tag>
      <Tag reviews={20} iconType={"CafeReview4"}>
        좌석이 업무하기 좋아요
      </Tag>
      <Tag reviews={30} iconType={"CafeReview5"}>
        조용한 공간이 있어요
      </Tag>
      <Tag reviews={40} iconType={"CafeReview6"}>
        집중이 잘 돼요
      </Tag>
      {/* 숙소 Tag */}
      <Tag reviews={12} iconType={"BerthReview1"}>
        침대가 편해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview2"}>
        방이 청결해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview3"}>
        와이파이가 빵빵해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview4"}>
        일할 수 있는 책상 있어요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview5"}>
        조식 먹을 수 있어요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview6"}>
        와이파이가 빵빵해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview7"}>
        콘센트 자리 많아요
      </Tag>
      {/* 워크챗 Tag */}
      <Tag workChat iconType={"WalkChatReview1"}>
        디자인 같이해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview2"}>
        개발 같이해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview3"}>
        기획 같이해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview4"}>
        주니어 모여라
      </Tag>
      <Tag workChat iconType={"WalkChatReview5"}>
        시니어 모여라
      </Tag>
      <Tag workChat iconType={"WalkChatReview6"}>
        저녁 메이트 구해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview7"}>
        점심 메이트 구해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview8"}>
        퇴근 후 함께 놀아요
      </Tag>
      <Tag workChat iconType={"WalkChatReview9"}>
        IT 함께해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview10"}>
        이커머스 함께해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview11"}>
        식품 함께해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview12"}>
        열정맨
      </Tag>
      <Tag workChat iconType={"WalkChatReview13"}>
        뷰티 함께해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview14"}>
        스타트업 함께해요
      </Tag>
      <Tag workChat iconType={"WalkChatReview15"}>
        직무 토크 하실 분
      </Tag>
    </>
  );
};

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => { };
