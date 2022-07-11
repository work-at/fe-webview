import { Meta, Story } from "@storybook/react";
import { Tag, TagProps } from "./Tag";

export default {
  title: "Components/Shared/Tag",
  component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => {
  return (
    <>
      {/* 까페 Tag */}
      <Tag IconType={"Common1"} children={"주차하기 편해요"} />
      <Tag Reviews={12} IconType={"Common2"} children={"뷰가 좋아요"} />
      <Tag Reviews={20} IconType={"Common3"} children={"가성비가 좋아요"} />
      <Tag Reviews={30} IconType={"Common4"} children={"사람이 많이 없어요"} />
      <Tag Reviews={40} IconType={"Common5"} children={"넓고 깨끗해요"} />
      {/* 음식점 Tag */}
      <Tag Reviews={90} IconType={"Food1"} children={"음식이 빨리나와요"} />
      <Tag Reviews={12} IconType={"Food2"} children={"혼합 가능해요"} />
      <Tag Reviews={20} IconType={"Food3"} children={"조용해요"} />
      <Tag Reviews={30} IconType={"Food4"} children={"맛집이예요"} />
      <Tag Reviews={40} IconType={"Food5"} children={"간단히 먹기 좋아요"} />
      {/* 까페 Tag */}
      <Tag Reviews={90} IconType={"Cafe1"} children={"와이파이가 빵빵해요"} />
      <Tag Reviews={12} IconType={"Cafe2"} children={"콘센트 자리 많아요"} />
      <Tag Reviews={20} IconType={"Cafe3"} children={"좌석이 업무하기 좋아요"} />
      <Tag Reviews={30} IconType={"Cafe4"} children={"조용한 공간이 있어요"} />
      <Tag Reviews={40} IconType={"Cafe5"} children={"집중이 잘 돼요"} />
      <Tag Reviews={4} IconType={"Cafe6"} children={"식사메뉴가 있어요"} />
    </>
  );
};

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {};
