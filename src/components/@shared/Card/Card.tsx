import * as S from "./Card.styled";

export type CardItem = {
  id: number;
  title: string;
  imageUrl: string;
  leftSubTitle: string;
  rightSubTitle: string;
  tags: string[];
};

type CardProps = CardItem & {
  className?: string;
  onClick?: () => void;
};

const Card = ({ title, leftSubTitle, rightSubTitle, tags, imageUrl, className, onClick }: CardProps) => {
  return (
    <S.CardWrap className={className} isClickable={!!onClick} onClick={onClick}>
      <S.CardTop>
        <S.UserThumb>
          <img src={imageUrl} alt={`${title} 이미지`} />
        </S.UserThumb>
        <S.UserInfo>
          <S.NickName>{title}</S.NickName>
          <S.UserEtc>
            <S.InfoList>{leftSubTitle}</S.InfoList>
            <S.InfoList>{rightSubTitle}</S.InfoList>
          </S.UserEtc>
        </S.UserInfo>
      </S.CardTop>
      <S.CardBottom>
        {tags.map((tag, index) => (
          <S.TagList key={index}>{tag}</S.TagList>
        ))}
      </S.CardBottom>
    </S.CardWrap>
  );
};

export default Card;
