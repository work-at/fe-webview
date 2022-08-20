import { useEffect, useRef } from "react";

type Props = {
  callback: (params: boolean) => void;
  delay?: number;
};

const usePageVisibility = ({ callback, delay = 0 }: Props) => {
  const timeoutId: { current: NodeJS.Timeout | null } = useRef(null);

  const browserCompatApi = () => {
    // Firefox up to v17
    if ("mozHidden" in document) {
      return {
        hidden: "mozHidden",
        visibilityChange: "mozvisibilitychange",
      };
    }
    // Chrome up to v32, Android up to v4.4, Blackberry up to v10
    if ("webkitHidden" in document) {
      return {
        hidden: "webkitHidden",
        visibilityChange: "webkitvisibilitychange",
      };
    }
    return {
      hidden: "hidden",
      visibilityChange: "visibilitychange",
    };
  };

  const cleanupTimeout = () => timeoutId.current && clearTimeout(timeoutId.current);

  useEffect(() => {
    const { hidden, visibilityChange } = browserCompatApi();

    if (typeof callback !== "function") {
      throw new Error("callback must be a function");
    }

    const handleVisibilityChange = () => {
      if (delay) {
        if (typeof delay !== "number" || delay < 0) {
          throw new Error("delay must be a positive integer");
        }

        if (timeoutId.current) cleanupTimeout();
        timeoutId.current = setTimeout(() => callback(!!document[hidden as "hidden"]), delay);
      } else {
        callback(!!document[hidden as "hidden"]);
      }
    };

    document.addEventListener(visibilityChange, handleVisibilityChange);

    return () => {
      document.removeEventListener(visibilityChange, handleVisibilityChange);
    };
  }, [callback]);
};

export default usePageVisibility;
