import { ChangeEvent, memo } from "react";
import Icon from "@/assets/Icon";
import * as S from "./CheckBox.styled";

export type CheckBoxItem = {
  id: string;
  checked?: boolean;
  label: string;
  isIcon?: boolean;
  iconType?: any;
};

export type CheckboxProps = {
  items: CheckBoxItem[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isSelected: (id: string) => boolean;
};

const CheckBox = ({ items, isSelected, onChange }: CheckboxProps) => {
  return (
    <S.CheckboxList>
      {items.map((item, index) => (
        <S.ListItem key={index} isIcon={item.isIcon}>
          <S.CheckboxContainer>
            <S.HiddenCheckbox
              id={item.id}
              type="checkbox"
              value={item.id}
              onChange={onChange}
              checked={isSelected(item.id)}
            />
            <S.Label htmlFor={item.id} isIcon={item.isIcon}>
              {item.isIcon && <Icon icon={item.iconType} size={30} />}
              <S.LabelTxt isIcon={item.isIcon}>{item.label}</S.LabelTxt>
            </S.Label>
          </S.CheckboxContainer>
        </S.ListItem>
      ))}
    </S.CheckboxList>
  );
};

export default memo(CheckBox);
