import React from "react";
import * as S from "./Spinner.styled";

interface SpinnerProps {
  isActive?: boolean;
}
const Spinner = ({ isActive = true }: SpinnerProps, parentRef?: React.LegacyRef<HTMLDivElement> | undefined) => {
  if (!isActive) return null;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <S.Loading ref={parentRef}>
      {isActive ? (
        <div className={"spinner"}>
          <div className={"double-bounce1"} />
          <div className={"double-bounce2"} />
        </div>
      ) : null}
    </S.Loading>
  );
};

export default React.forwardRef(Spinner);
