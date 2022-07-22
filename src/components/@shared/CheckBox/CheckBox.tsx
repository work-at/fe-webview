import React, { memo } from "react";
import Icon from "@/assets/Icon";
import { useMultiselect } from "./Hooks";
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
};

const CheckBox = ({ items }: CheckboxProps) => {
  const { isSelected, onChange } = useMultiselect([]);
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
              <S.LabelTxt>{item.label}</S.LabelTxt>
            </S.Label>
          </S.CheckboxContainer>
        </S.ListItem>
      ))}
      {/* <div>Selected: {selected.join()}</div> */}
    </S.CheckboxList>
  );
};

export default memo(CheckBox);
