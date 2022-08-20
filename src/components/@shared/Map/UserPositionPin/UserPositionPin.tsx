import { Z_INDEX } from "@/constants/zIndex";
import { MapMarker as KakaoMapMarker } from "react-kakao-maps-sdk";
import USER_MARKER_PNG from "./user-marker.png";

interface UserPositionPinProps {
  lat: number;
  lng: number;
}

const UserPositionPin = ({ lat, lng }: UserPositionPinProps) => {
  return (
    <KakaoMapMarker
      position={{ lat, lng }}
      zIndex={Z_INDEX.HIGHEST}
      image={{
        size: {
          width: 26,
          height: 26,
        },
        src: USER_MARKER_PNG,
        options: {
          offset: {
            x: 13,
            y: 13,
          },
        },
      }}
    />
  );
};

export default UserPositionPin;
