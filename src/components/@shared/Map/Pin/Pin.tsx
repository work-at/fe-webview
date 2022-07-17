import { memo, useCallback } from "react";
import { MapMarker as KakaoMapMarker } from "react-kakao-maps-sdk";

export type PinProps = {
  image: string;
  size: { width: number; height: number };
  lat: number;
  lng: number;
  onClick: () => void;
};

const Pin = ({ lat, lng, image, size, onClick }: PinProps) => {
  return (
    <KakaoMapMarker
      position={{ lat, lng }}
      onClick={onClick}
      image={{
        size: size,
        src: image,
      }}
    />
  );
};

export default memo(Pin);
