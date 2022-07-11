import { useState, useCallback, memo } from "react";
import * as S from "./Tabs.styled";

export type TabItem = {
  id: string;
  label: string;
};

export type TabsProps = {
  items: TabItem[];
  /** 탭 아이템이 선택되었을 때 동작하는 핸들러 */
  onSelect: (id: string) => void;
};

const Tabs = ({ items, onSelect }: TabsProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleTabItemSelect = useCallback(
    (id: string) => {
      const newSelectedItemIndex = items.findIndex((item) => item.id === id);

      if (newSelectedItemIndex === undefined) {
        throw Error("선택된 탭 아이템을 찾을 수 없습니다.");
      }

      setSelectedItemIndex(newSelectedItemIndex);
      onSelect(id);
    },
    [items]
  );

  return (
    <S.TabWrap>
      <S.TabList role="tablist">
        {items.map((item, index) => (
          <S.TabItem key={index} itemCount={items.length}>
            <S.TabLink onClick={() => {handleTabItemSelect(item.id)}}>
              <S.TabText isSelected={index === selectedItemIndex}>{item.label}</S.TabText>
            </S.TabLink>
          </S.TabItem>
        ))}
        <S.TabIndicatorWrapper itemCount={items.length} selectedItemIndex={selectedItemIndex}>
          <S.TabIndicator />
        </S.TabIndicatorWrapper>
      </S.TabList>
    </S.TabWrap>
  );
};

export default memo(Tabs);
