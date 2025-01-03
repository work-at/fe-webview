import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as S from "./ModalContainer.styled";

export type ModalContainerProps = {
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  onConfirm?: (e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  confirmText?: string;
  children: React.ReactNode;
  closeOnClickOverlay?: boolean;
};

const $ModalContainer = document.getElementById("modal");

export const ModalContainer = ({
  isOpen,
  children,
  onClose,
  onConfirm,
  confirmText,
  closeOnClickOverlay = true,
}: ModalContainerProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    $ModalContainer?.setAttribute("aria-hidden", "true");
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
      $ModalContainer?.removeAttribute("aria-hidden");
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
    [closeOnClickOverlay, onClose]
  );

  return (
    <S.Container ref={modalRef} isOpen={isOpen} onClick={handleClickDimmed} tabIndex={-1}>
      <S.Dialog isOpen={isOpen}>
        <S.Body>{children}</S.Body>
        <S.Foot>
          {onConfirm && onClose ? (
            <>
              <S.CancelButton onClick={onClose}>취소</S.CancelButton>
              <S.ConfirmButton onClick={onConfirm}>{confirmText}</S.ConfirmButton>
            </>
          ) : (
            <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
          )}
        </S.Foot>
      </S.Dialog>
    </S.Container>
  );
};

const ModalContainerPortal = (props: ModalContainerProps) => {
  if (!$ModalContainer) {
    throw Error("modal 요소가 HTML 상에 존재하지 않습니다.");
  }

  return createPortal(<ModalContainer {...props} />, $ModalContainer);
};

export default ModalContainerPortal;
