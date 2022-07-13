import * as S from "./Card.styled";

export type CardItem = {
  id: number;
  nickname: string;
  imageUrl: string;
  job: string;
  year: string;
  acts: string[];
};

type CardProps = CardItem;

const Card = ({ nickname, job, year, acts, imageUrl }: CardProps) => {
  return (
    <S.CardWrap>
      <S.CardTop>
        <S.UserThumb>
          <img src={imageUrl} alt="" />
        </S.UserThumb>
        <S.UserInfo>
          <S.NickName>{nickname}</S.NickName>
          <S.UserEtc>
            <S.InfoList>{job}</S.InfoList>
            <S.InfoList>{year}년차</S.InfoList>
          </S.UserEtc>
        </S.UserInfo>
      </S.CardTop>
      <S.CardBottom>
        {acts.map((act, index) => (
          <S.TagList key={index}>{act}</S.TagList>
        ))}
      </S.CardBottom>
    </S.CardWrap>
  );
};

export default Card;
