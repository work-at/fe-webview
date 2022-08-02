import { ChangeEvent, memo } from "react";
import Icon from "@/assets/Icon";
import * as S from "./CheckBox.styled";

export type CheckBoxItem = {
  id: string;
  checked?: boolean;
  label: string;
  iconType?: any;
};

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  items: CheckBoxItem[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isSelected: (id: string) => boolean;
  isIcon?: boolean;
  widthAuto?: boolean;
}

const CheckBox = ({ items, isSelected, onChange, isIcon, widthAuto }: CheckboxProps) => {
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
              checked={isSelected(item.id)}
            />
            <S.Label htmlFor={item.id} isIcon={isIcon} widthAuto={widthAuto}>
              {isIcon && <Icon icon={item.iconType} size={30} />}
              <S.LabelTxt isIcon={isIcon}>{item.label}</S.LabelTxt>
            </S.Label>
          </S.CheckboxContainer>
        </S.ListItem>
      ))}
    </S.CheckboxList>
  );
};

export default memo(CheckBox);
