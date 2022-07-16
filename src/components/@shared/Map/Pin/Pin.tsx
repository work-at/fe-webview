import { memo } from "react";
import { MapMarker as KakaoMapMarker } from "react-kakao-maps-sdk";

export type PinProps = {
  id: number;
  isWorker?: boolean;
  image: string;
  size: { width: number; height: number };
  lat: number;
  lng: number;
  isSelected: boolean;
  onClick: (id: number) => void;
};

const getImageSize = (isWorker: boolean | undefined, isSelected: boolean): { width: number; height: number } => {
  if (isWorker) {
    if (isSelected) {
      return {
        width: 35,
        height: 35,
      };
    } else {
      return {
        width: 29,
        height: 39,
      };
    }
  } else {
    if (isSelected) {
      return {
        width: 42,
        height: 60,
      };
    } else {
      return {
        width: 26,
        height: 36,
      };
    }
  }
};

const Pin = ({ id, lat, lng, image, size, isWorker, isSelected, onClick }: PinProps) => {
  return (
    <KakaoMapMarker
      position={{ lat, lng }}
      onClick={() => onClick(id)}
      image={{
        size: size,
        src: image,
      }}
    />
  );
};

export default memo(Pin);
