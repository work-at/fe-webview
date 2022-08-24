import * as S from "./Tag.styled";
import Icon from "@/assets/Icon";

export type TagProps = {
  iconType: any;
  reviews?: number;
  walkChat?: boolean;
  children: React.ReactNode;
};

const Tag = ({ iconType, reviews = 0, children }: TagProps) => {
  return (
    <S.Tag>
      <S.TagInner restWidth={((window.innerWidth - 220) / 100) * reviews}>
        <S.TagIcon>
          <Icon icon={"BerthReview1"} />
        </S.TagIcon>
        <S.TagTxt>{children}</S.TagTxt>
        <S.TagNum>{reviews}</S.TagNum>
      </S.TagInner>
    </S.Tag>
  );
};

export default Tag;
