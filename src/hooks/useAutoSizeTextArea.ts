import { useLayoutEffect } from "react";

const useAutoSizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useLayoutEffect(() => {
    if (textAreaRef) {
      console.log("test!");

      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

export default useAutoSizeTextArea;
