import * as S from "./CardList.styled";
import { CardItem } from "../Card";
import Card from "../Card/Card";

type CardListProps = {
  items: CardItem[];
  className?: string;
  onCardClick: (id: number) => void;
};

const CardList = ({ items, className, onCardClick }: CardListProps) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <Card {...item} onClick={() => onCardClick(item.id)} />
      ))}
    </div>
  );
};

export default CardList;
