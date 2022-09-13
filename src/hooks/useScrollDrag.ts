import { useEffect, useRef, useState } from "react";

const useScrollDrag = () => {
  const ref = useRef<HTMLUListElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    ref.current?.addEventListener("scroll", () => {
      setCurrentIndex(Math.round(ref.current!.scrollLeft / ref.current!.clientWidth));
    });
  }, []);

  const events = {
    onMouseDown: ({ nativeEvent: e }: React.MouseEvent<HTMLUListElement>) => {
      setMouseX(e.clientX);
      setScrollX(ref.current!.scrollLeft);
    },
    onMouseMove: ({ nativeEvent: e }: React.MouseEvent<HTMLUListElement>) => {
      if (e.buttons > 0) {
        e.preventDefault();
        ref.current!.scrollTo({
          left: scrollX + mouseX - e.clientX,
          behavior: "smooth",
        });
      }
    },
  };

  return { events, ref, currentIndex };
};

export default useScrollDrag;
