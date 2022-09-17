import * as S from "./Card.styled";

export type CardItem = {
  id: number;
  type: "cafe" | "diner" | "worker";
  title: string;
  imageUrl?: string;
  reviewNum?: number;
  addr?: string;
  job?: string;
  year?: string;
  tags: string[];
  workchats?: number;
};

type CardProps = CardItem & {
  className?: string;
  onClick?: () => void;
};

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const Card = ({
  type,
  title,
  reviewNum,
  addr,
  job,
  year,
  tags,
  imageUrl,
  className,
  workchats,
  onClick,
}: CardProps) => {
  return (
    <S.CardWrap className={className} isClickable={!!onClick} onClick={onClick}>
      <S.CardTop>
        <S.CardThumb>
          <img src={imageUrl === "" || !imageUrl ? DEFAULT_IMAGE : imageUrl} alt={`${title} 이미지`} />
        </S.CardThumb>
        <S.DetailInfo>
          <S.Title>{title}</S.Title>
          {type === "worker" && (
            <S.WalkChat>
              워크챗 <S.ChatNum>{workchats}</S.ChatNum>
            </S.WalkChat>
          )}
          {type === "worker" ? (
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
        {tags?.map((tag, index) => (
          <S.TagList key={index}>{tag}</S.TagList>
        ))}
      </S.CardBottom>
    </S.CardWrap>
  );
};

export default Card;
