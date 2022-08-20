import { ReactNode, useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";

export type PullStatus = "pulling" | "canRelease" | "refreshing" | "complete";

export type PullToRefreshProps = {
  onCallback?: () => Promise<void>;
  pullingText?: ReactNode;
  canReleaseText?: ReactNode;
  refreshingText?: ReactNode;
  completeText?: ReactNode;
  completeDelay?: number;
  headHeight?: number;
  tailHeight?: number;
  threshold?: number;
  disabled?: boolean;
  chatAreaRef: React.RefObject<HTMLDivElement>;
};

type ScrollElement = HTMLElement | Window;
const defaultRoot = window;
const overflowStylePatterns = ["scroll", "auto", "overlay"];

const isElement = (node: Element) => {
  const ELEMENT_NODE_TYPE = 1;
  return node.nodeType === ELEMENT_NODE_TYPE;
};

export const getScrollParent = (
  el: Element,
  root: ScrollElement | null | undefined = defaultRoot
): Window | Element | null | undefined => {
  let node = el;

  while (node && node !== root && isElement(node)) {
    if (node === document.body) {
      return root;
    }
    const { overflowY } = window.getComputedStyle(node);
    if (overflowStylePatterns.includes(overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode as Element;
  }
  return root;
};

export const sleep = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const usePullDownToCallback = ({
  headHeight = 40,
  threshold = 60,
  onCallback,
  disabled = false,
  completeDelay = 500,
  chatAreaRef,
}: PullToRefreshProps) => {
  const [status, setStatus] = useState<PullStatus>("pulling");
  const requestRef = useRef<number>(0);
  const headRef = useRef<HTMLDivElement>(null);
  const pullingRef = useRef(false);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const slideDown = (height: number, cb?: () => void) => {
    requestAnimationFrame(function animate() {
      if (headRef.current) {
        const currentHeight = headRef.current.clientHeight;
        if (currentHeight > height) {
          const decreasing = currentHeight - height > 20 ? 5 : 1;
          headRef.current.style.height = `${currentHeight - decreasing}px`;
          requestRef.current = requestAnimationFrame(animate);
        }

        if (currentHeight === height) {
          if (cb) {
            cb();
          }
        }
      }
    });
  };

  const slideUp = (height: number, cb?: () => void) => {
    requestAnimationFrame(function animate() {
      if (headRef.current) {
        const currentHeight = headRef.current.clientHeight;
        if (currentHeight > height) {
          headRef.current.style.height = `${currentHeight - 1}px`;
          requestRef.current = requestAnimationFrame(animate);
        }

        if (currentHeight === height) {
          if (cb) {
            cb();
          }
        }
      }
    });
  };

  const doRefresh = async () => {
    slideDown(headHeight);
    setStatus("refreshing");
    try {
      await onCallback?.();
      setStatus("complete");
    } catch (e) {
      slideDown(0, () => {
        setStatus("pulling");
      });
      setStatus("pulling");
      throw e;
    }
    if (completeDelay > 0) {
      await sleep(completeDelay);
    }

    slideDown(0, () => {
      setStatus("pulling");
    });
    setStatus("pulling");
  };

  useDrag(
    (state: any) => {
      if (status === "refreshing" || status === "complete") return;

      const { event } = state;

      if (state.last) {
        pullingRef.current = false;
        if (status === "canRelease") {
          doRefresh();
        } else {
          slideUp(0);
        }
        return;
      }

      const [, y] = state.movement;
      const getScrollTop = (element: Window | Element) => {
        return "scrollTop" in element ? element.scrollTop : element.scrollY;
      };
      if (state.first && y > 0) {
        const { target } = state.event;
        if (!target || !(target instanceof Element)) return;
        let scrollParent = getScrollParent(target);
        // eslint-disable-next-line no-constant-condition
        while (true) {
          if (!scrollParent) return;
          const scrollTop = getScrollTop(scrollParent);
          if (scrollTop > 0) {
            return;
          }
          if (scrollParent instanceof Window) {
            break;
          }
          scrollParent = getScrollParent(scrollParent.parentNode as Element);
        }
        pullingRef.current = true;
      }

      if (!pullingRef.current) return;

      if (event.cancelable) {
        event.preventDefault();
      }
      event.stopPropagation();

      if (headRef.current) {
        if (y < headHeight) {
          headRef.current.style.height = `${y}px`;
        } else {
          headRef.current.style.height = `${headHeight + (y - headHeight) * 0.25}px`;
        }
      }
      setStatus(y > threshold ? "canRelease" : "pulling");
    },
    {
      pointer: { touch: true },
      axis: "y",
      target: chatAreaRef,
      enabled: !disabled,
      eventOptions: { passive: false },
    }
  );

  return { headRef, headHeight };
};

export const usePullUpToCallback = ({
  tailHeight = 40,
  threshold = 60,
  onCallback,
  disabled = false,
  completeDelay = 500,
  chatAreaRef,
}: PullToRefreshProps) => {
  const [status, setStatus] = useState<PullStatus>("pulling");
  const requestRef = useRef<number>(0);
  const tailRef = useRef<HTMLDivElement>(null);
  const pullingRef = useRef(false);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const slideDown = (height: number, cb?: () => void) => {
    requestAnimationFrame(function animate() {
      if (tailRef.current) {
        const currentHeight = tailRef.current.clientHeight;
        if (currentHeight > height) {
          const decreasing = currentHeight - height > 20 ? 5 : 1;
          tailRef.current.style.height = `${currentHeight - decreasing}px`;
          requestRef.current = requestAnimationFrame(animate);
        }

        if (currentHeight === height) {
          if (cb) {
            cb();
          }
        }
      }
    });
  };

  const slideUp = (height: number, cb?: () => void) => {
    requestAnimationFrame(function animate() {
      if (tailRef.current) {
        const currentHeight = tailRef.current.clientHeight;
        if (currentHeight > height) {
          tailRef.current.style.height = `${currentHeight - 1}px`;
          requestRef.current = requestAnimationFrame(animate);
        }

        if (currentHeight === height) {
          if (cb) {
            cb();
          }
        }
      }
    });
  };

  const doRefresh = async () => {
    slideUp(tailHeight);
    setStatus("refreshing");
    try {
      await onCallback?.();
      setStatus("complete");
    } catch (e) {
      slideUp(0, () => {
        setStatus("pulling");
      });
      setStatus("pulling");
      throw e;
    }
    if (completeDelay > 0) {
      await sleep(completeDelay);
    }

    slideUp(0, () => {
      setStatus("pulling");
    });
    setStatus("pulling");
  };

  useDrag(
    (state: any) => {
      if (status === "refreshing" || status === "complete") return;

      const { event } = state;

      if (state.last) {
        pullingRef.current = false;
        if (status === "canRelease") {
          doRefresh();
        } else {
          slideDown(0);
        }
        return;
      }

      const [, y] = state.movement;
      const getScrollTop = (element: Window | Element) => {
        return "scrollTop" in element ? element.scrollTop : element.scrollY;
      };

      if (state.first && y <= 0) {
        const { target } = state.event;
        if (!target || !(target instanceof Element)) return;
        let scrollParent = getScrollParent(target);
        // eslint-disable-next-line no-constant-condition
        while (true) {
          if (!scrollParent) return;
          const scrollTop = getScrollTop(scrollParent);

          if (scrollTop < 0) {
            return;
          }
          if (scrollParent instanceof Window) {
            break;
          }

          scrollParent = getScrollParent(scrollParent.parentNode as Element);
        }

        pullingRef.current = true;
      }

      if (!pullingRef.current) return;

      if (event.cancelable) {
        event.preventDefault();
      }
      event.stopPropagation();

      if (tailRef.current) {
        if (-y < tailHeight) {
          tailRef.current.style.height = `${-y}px`;
          tailRef.current.scrollIntoView();
        } else {
          tailRef.current.style.height = `${tailHeight + (-y - tailHeight) * 0.25}px`;
        }
      }

      setStatus(-y > threshold ? "canRelease" : "pulling");
    },
    {
      pointer: { touch: true },
      axis: "y",
      target: chatAreaRef,
      enabled: !disabled,
      eventOptions: { passive: false },
    }
  );

  return { tailRef, tailHeight };
};
