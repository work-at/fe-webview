import { Circle, Map as KakaoMap } from "react-kakao-maps-sdk";
import { Coordinates, PinItem } from "@/domains/map.type";
import Pin from "./Pin";
import UserPositionPin from "./UserPositionPin";
import { useRef } from "react";
import { MAP } from "@/constants/map";

/** 내 위치와 다른 핀들의 위치를 렌더링 한다. */
export type MapViewProps = {
  pins: PinItem[];
  userCoordinates: Coordinates;
  centerCoordinates: Coordinates;
  selectedPinId?: number;
  zIndex: number;
  pinImage: string;
  pinSize: { width: number; height: number };
  selectedPinSize: { width: number; height: number };
  selectedPinImage: string;
  className?: string;
  onPinSelect: (id: number | undefined) => void;
};

const MapView = ({
  pins,
  userCoordinates,
  centerCoordinates,
  className,
  zIndex,
  pinImage,
  pinSize,
  selectedPinSize,
  selectedPinImage,
  selectedPinId,
  onPinSelect,
}: MapViewProps) => {
  const centerCoordinatesRef = useRef(userCoordinates);

  return (
    <KakaoMap
      center={{ lat: centerCoordinates.lat, lng: centerCoordinates.lng }}
      style={{
        width: "100%",
        height: "100%",
        zIndex: zIndex,
      }}
      className={className}
      level={5}
      isPanto
      onClick={() => onPinSelect(undefined)}
    >
      <Circle
        center={centerCoordinatesRef.current}
        radius={MAP.SearchRadius}
        fillColor={"#78FFAA"}
        fillOpacity={0.1}
        strokeColor={"#78FFAA"}
      />
      {pins.map((pin) => (
        <Pin
          key={pin.id}
          lat={pin.coordinates.lat}
          lng={pin.coordinates.lng}
          image={selectedPinId === pin.id ? selectedPinImage : pinImage}
          size={selectedPinId === pin.id ? selectedPinSize : pinSize}
          onClick={() => onPinSelect(pin.id)}
        />
      ))}
      <UserPositionPin lat={userCoordinates.lat} lng={userCoordinates.lng} />
    </KakaoMap>
  );
};

export default MapView;
