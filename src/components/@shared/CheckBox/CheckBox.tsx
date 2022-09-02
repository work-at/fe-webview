import { memo } from "react";
import Icon, { IconType } from "@/assets/Icon";
import * as S from "./CheckBox.styled";

export type CheckBoxItem = {
  id: string;
  label: string;
  iconType?: any;
};

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  items: CheckBoxItem[];
  selectedItemIds: string[];
  isIcon?: boolean;
  widthAuto?: boolean;
}

const CheckBox = ({ items, selectedItemIds, onChange, isIcon, widthAuto }: CheckboxProps) => {
  return (
    <S.CheckboxList isIcon={isIcon} widthAuto={widthAuto}>
      {items.map((item, index) => (
        <S.ListItem key={index} isIcon={isIcon} widthAuto={widthAuto}>
          <S.CheckboxContainer>
            <S.HiddenCheckbox
              id={item.id}
              type="checkbox"
              value={item.id}
              onChange={onChange}
              checked={selectedItemIds.includes(item.id)}
            />
            <S.Label htmlFor={item.id} isIcon={isIcon} widthAuto={widthAuto}>
              {isIcon && <Icon icon={item.iconType as IconType} size={30} />}
              <S.LabelTxt isIcon={isIcon}>{item.label}</S.LabelTxt>
            </S.Label>
          </S.CheckboxContainer>
        </S.ListItem>
      ))}
    </S.CheckboxList>
  );
};

export default memo(CheckBox);
