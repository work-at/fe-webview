import * as S from "./CardList.styled";
import { CardItem } from "../Card";

type CardListProps = {
  items: CardItem[];
  className?: string;
  onCardClick: (id: number) => void;
};

const CardList = ({ items, className, onCardClick }: CardListProps) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <S.CardWrap key={item.id} onClick={() => onCardClick(item.id)} isClickable={!!onCardClick}>
          <S.CardTop>
            <S.UserThumb>
              <img src={item.imageUrl} alt="" />
            </S.UserThumb>
            <S.UserInfo>
              <S.NickName>{item.title}</S.NickName>
              <S.UserEtc>
                <S.InfoList>{item.leftSubTitle}</S.InfoList>
                <S.InfoList>{item.rightSubTitle}</S.InfoList>
              </S.UserEtc>
            </S.UserInfo>
          </S.CardTop>
          <S.CardBottom>
            {item.tags.map((act, index) => (
              <S.TagList key={index}>{act}</S.TagList>
            ))}
          </S.CardBottom>
        </S.CardWrap>
      ))}
    </div>
  );
};

export default CardList;
