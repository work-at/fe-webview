import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "Components/Shared/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => {
  return (
    <>
      <div>공통</div>
      <Tag reviews={40} iconType={"PARKING"}>
        주차하기 편해요
      </Tag>
      <Tag reviews={12} iconType={"VIEW"}>
        뷰가 좋아요
      </Tag>
      <Tag reviews={20} iconType={"COST"}>
        가성비가 좋아요
      </Tag>
      <Tag reviews={30} iconType={"NOT_CROWDED"}>
        사람이 많이 없어요
      </Tag>
      <Tag iconType={"SPACE"}>넓고 깨끗해요</Tag>
      <div>음식점</div>
      <Tag reviews={90} iconType={"QUICK_FOOD"}>
        음식이 빨리나와요
      </Tag>
      <Tag reviews={12} iconType={"EAT_ALONE"}>
        혼합 가능해요
      </Tag>
      <Tag reviews={20} iconType={"QUIET"}>
        조용해요
      </Tag>
      <Tag reviews={30} iconType={"MUST_GO"}>
        맛집이예요
      </Tag>
      <Tag reviews={40} iconType={"SNACK"}>
        간단히 먹기 좋아요
      </Tag>
      <div>카페</div>
      <Tag reviews={90} iconType={"WIFI"}>
        와이파이가 빵빵해요
      </Tag>
      <Tag reviews={12} iconType={"POWER"}>
        콘센트 자리 많아요
      </Tag>
      <Tag reviews={20} iconType={"SEAT"}>
        좌석이 업무하기 좋아요
      </Tag>
      <Tag reviews={30} iconType={"QUIET"}>
        조용한 공간이 있어요
      </Tag>
      <Tag reviews={4} iconType={"MEAL"}>
        식사메뉴가 있어요
      </Tag>
      <div>숙소</div>
      <Tag reviews={12} iconType={"BerthReview1"}>
        침대가 편해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview2"}>
        방이 청결해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview6"}>
        와이파이가 빵빵해요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview4"}>
        일할 수 있는 책상 있어요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview5"}>
        조식 먹을 수 있어요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview5"}>
        위치가 좋아요
      </Tag>
      <Tag reviews={12} iconType={"BerthReview7"}>
        콘센트 자리 많아요
      </Tag>
      <div>워크챗</div>
      <Tag walkChat iconType={"WalkChatReview1"}>
        디자인 같이해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview2"}>
        개발 같이해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview3"}>
        기획 같이해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview4"}>
        주니어 모여라
      </Tag>
      <Tag walkChat iconType={"WalkChatReview5"}>
        시니어 모여라
      </Tag>
      <Tag walkChat iconType={"WalkChatReview6"}>
        저녁 메이트 구해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview7"}>
        점심 메이트 구해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview8"}>
        퇴근 후 함께 놀아요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview9"}>
        IT 함께해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview10"}>
        이커머스 함께해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview11"}>
        식품 함께해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview12"}>
        열정맨
      </Tag>
      <Tag walkChat iconType={"WalkChatReview13"}>
        뷰티 함께해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview14"}>
        스타트업 함께해요
      </Tag>
      <Tag walkChat iconType={"WalkChatReview15"}>
        직무 토크 하실 분
      </Tag>
    </>
  );
};

export const Basic = Template.bind({});

// Basic.play = async ({ canvasElement }: any) => { };
