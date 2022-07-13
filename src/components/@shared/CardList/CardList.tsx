import * as S from "./CardList.styled";
import { CardItem } from "../Card";

type CardListProps = {
  items: CardItem[];
  onCardClick: (id: number) => void;
};

const CardList = ({ items, onCardClick }: CardListProps) => {
  return (
    <>
      {items.map((item) => (
        <S.CardWrap key={item.id} onClick={() => onCardClick(item.id)} isClickable={!!onCardClick}>
          <S.CardTop>
            <S.UserThumb>
              <img src={item.imageUrl} alt="" />
            </S.UserThumb>
            <S.UserInfo>
              <S.NickName>{item.nickname}</S.NickName>
              <S.UserEtc>
                <S.InfoList>{item.job}</S.InfoList>
                <S.InfoList>{item.year}년차</S.InfoList>
              </S.UserEtc>
            </S.UserInfo>
          </S.CardTop>
          <S.CardBottom>
            {item.acts.map((act, index) => (
              <S.TagList key={index}>{act}</S.TagList>
            ))}
          </S.CardBottom>
        </S.CardWrap>
      ))}
    </>
  );
};

export default CardList;
