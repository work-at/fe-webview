import { createPortal } from "react-dom";
import * as S from "./BottomDrawer.styled";

export type BottomDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const $BottomDrawer = document.getElementById("bottom-drawer");

export const BottomDrawer = ({ isOpen, children, onClose }: BottomDrawerProps) => {
  return (
    <S.Container isOpen={isOpen}>
      <S.Header>
        <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
      </S.Header>
      <S.Body>{children}</S.Body>
    </S.Container>
  );
};

const BottomDrawerPortal = (props: BottomDrawerProps) => {
  if (!$BottomDrawer) {
    throw Error("bottom-drawer 요소가 HTML 상에 존재하지 않습니다.");
  }

  return createPortal(<BottomDrawer {...props} />, $BottomDrawer);
};

export default BottomDrawerPortal;
