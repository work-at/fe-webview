import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as S from "../ModalContainer/ModalContainer.styled";

export type TwoBtnModalContainerProps = {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
  closeOnClickOverlay?: boolean;
};

const $TwoBtnModalContainer = document.getElementById("modal");

export const TwoBtnModalContainer = ({
  isOpen,
  children,
  onClose,
  closeOnClickOverlay = true,
}: TwoBtnModalContainerProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    $TwoBtnModalContainer?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "hidden";

    const handleModalCloseWithEscHandler = ({ key }: KeyboardEvent) => {
      let scheduledAnimationFrame = false;

      if (scheduledAnimationFrame) {
        return;
      }

      scheduledAnimationFrame = true;

      if (key === "Escape" && onClose) {
        onClose();
        scheduledAnimationFrame = false;
      }
    };

    document.addEventListener("keyup", handleModalCloseWithEscHandler);

    const handleFocusTrap = (e: KeyboardEvent) => {
      const focusableNodeList = modalRef.current?.querySelectorAll<HTMLElement>(
        "input, button, textarea, select, [href] [tabindex]"
      );

      if (focusableNodeList) {
        const firstFocusableNode = focusableNodeList[0];
        const lastFocusableNode = focusableNodeList[focusableNodeList.length - 1];

        if (e.target === firstFocusableNode && e.shiftKey && e.key === "Tab") {
          e.preventDefault();
          lastFocusableNode.focus();
        }
        if (e.target === lastFocusableNode && !e.shiftKey && e.key === "Tab") {
          e.preventDefault();
          firstFocusableNode.focus();
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);

    return () => {
      $TwoBtnModalContainer?.removeAttribute("aria-hidden");
      document.body.style.overflow = "unset";
      document.removeEventListener("keyup", handleModalCloseWithEscHandler);
      document.removeEventListener("keydown", handleFocusTrap);
    };
  }, [closeOnClickOverlay, onClose]);

  const handleClickDimmed = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      if (e.target === e.currentTarget && closeOnClickOverlay && onClose) {
        onClose(e);
      }
    },
    [closeOnClickOverlay]
  );

  return (
    <S.Container ref={modalRef} isOpen={isOpen} onClick={handleClickDimmed} tabIndex={-1}>
      <S.Dialog isOpen={isOpen}>
        <S.Body>{children}</S.Body>
        <S.Foot>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={onClose}>차단하기</S.ConfirmButton>
        </S.Foot>
      </S.Dialog>
    </S.Container>
  );
};

const TwoBtnModalContainerPortal = (props: TwoBtnModalContainerProps) => {
  if (!$TwoBtnModalContainer) {
    throw Error("modal 요소가 HTML 상에 존재하지 않습니다.");
  }

  return createPortal(<TwoBtnModalContainer {...props} />, $TwoBtnModalContainer);
};

export default TwoBtnModalContainerPortal;
