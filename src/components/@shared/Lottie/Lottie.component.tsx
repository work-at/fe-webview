import { HTMLAttributes, useEffect, useRef } from "react";
import lottie from "lottie-web";
import * as S from "./Lottie.styled";

export type Props = {
  loop?: boolean;
  autoplay?: boolean;
  source: string;
  style?: HTMLAttributes<HTMLDivElement>;
  speed?: number;
};

const Lottie = ({ loop = true, autoplay = true, source, style, speed = 1 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      lottie.loadAnimation({
        animationData: source,
        container: ref.current,
        loop,
        autoplay,
      });
      lottie.setSpeed(speed);
    }
  }, [autoplay, loop, source, speed]);

  return (
    <S.Container>
      <div ref={ref} style={style} />
    </S.Container>
  );
};

export default Lottie;
