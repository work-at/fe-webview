import { createPortal } from "react-dom";
import * as S from "./BottomDrawer.styled";

export type BottomDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const $BottomDrawer = document.getElementById("bottom-drawer");

export const BottomDrawerContent = ({ isOpen, children, onClose, className }: BottomDrawerProps) => {
  return (
    <S.Container isOpen={isOpen} className={className}>
      <S.Header>
        <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  );
};

const BottomDrawer = (props: BottomDrawerProps) => {
  if (!$BottomDrawer) {
    throw Error("bottom-drawer 요소가 HTML 상에 존재하지 않습니다.");
  }

  return createPortal(<BottomDrawerContent {...props} />, $BottomDrawer);
};

export default BottomDrawer;
