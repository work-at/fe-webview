import { useEffect, useRef } from "react";

const useErrorImageReplace = (imageUrl: string | undefined, replaceImageUrl: string) => {
  const imageRef = useRef(undefined as unknown as HTMLImageElement);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const image = new Image();
    const handleError = () => {
      imageRef.current.src = replaceImageUrl;
    };

    image.addEventListener("error", handleError);

    image.src = imageUrl;

    return () => {
      image.removeEventListener("error", handleError);
    };
  }, [imageUrl, replaceImageUrl]);

  return {
    imageRef,
  };
};

export default useErrorImageReplace;
