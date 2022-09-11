import { useCallback, useEffect, useRef, useState } from "react";
import usePageVisibility from "./usePageVisibility";

type Props = {
  callback: () => void;
  delay?: number;
};

const useInterval = ({ callback, delay = 0 }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityChange = useCallback((isVisible: boolean) => {
    setIsVisible(isVisible);
  }, []);

  usePageVisibility({ callback: handleVisibilityChange });

  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (isVisible) {
        savedCallback.current?.();
      }
    };

    const timerId = setInterval(tick, delay);
    return () => clearInterval(timerId);
  }, [delay, isVisible]);
};

export default useInterval;
