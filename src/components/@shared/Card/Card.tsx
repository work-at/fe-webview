import * as S from "./Card.styled";

export type CardItem = {
  id: number;
  type: string;
  title: string;
  imageUrl: string;
  reviewNum?: number;
  addr?: string;
  job?: string;
  year?: string;
  tags: string[];
};

type CardProps = CardItem & {
  className?: string;
  onClick?: () => void;
};

const Card = ({ type, title, reviewNum, addr, job, year, tags, imageUrl, className, onClick }: CardProps) => {
  return (
    <S.CardWrap className={className} isClickable={!!onClick} onClick={onClick}>
      <S.CardTop>
        <S.CardThumb>
          <img src={imageUrl} alt={`${title} 이미지`} />
        </S.CardThumb>
        <S.DetailInfo>
          <S.Title>{title}</S.Title>
          {type === "worcationer" && (
            <S.WalkChat>
              워크챗 <S.ChatNum>5</S.ChatNum>
            </S.WalkChat>
          )}
          {type === "worcationer" ? (
            <S.WorcationerEtc>
              <S.InfoList>{job}</S.InfoList>
              <S.InfoList>{year}</S.InfoList>
            </S.WorcationerEtc>
          ) : (
            <S.StoreEtc>
              <S.ReviewTxt>리뷰 ({reviewNum})</S.ReviewTxt>
              <S.AddrTxt>{addr}</S.AddrTxt>
            </S.StoreEtc>
          )}
        </S.DetailInfo>
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
