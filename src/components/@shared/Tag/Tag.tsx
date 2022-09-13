import * as S from "./Tag.styled";
import Icon, { IconType } from "@/assets/Icon";

export type TagProps = {
  iconType: IconType;
  reviews?: number;
  walkChat?: boolean;
  children: React.ReactNode;
};

const Tag = ({ iconType, reviews = 0, children }: TagProps) => {
  return (
    <S.Tag>
      <S.TagInner restWidth={((window.innerWidth - 220) / 100) * reviews}>
        <S.TagIcon>
          <Icon icon={iconType} />
        </S.TagIcon>
        <S.TagTxt>{children}</S.TagTxt>
        {!!reviews && <S.TagNum>{reviews}</S.TagNum>}
      </S.TagInner>
    </S.Tag>
  );
};

export default Tag;
