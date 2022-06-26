import { Map as KakaoMap, MapMarker as KakaoMapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import Pin, { PinItem } from "./Pin";

/** 내 위치와 다른 핀들의 위치를 렌더링 한다. */
export type MapProps = {
  pins: PinItem[];
  userPosition: {
    x: number;
    y: number;
  };
  className?: string;
};

const API_KEY = process.env.KAKAO_MAP_API_KEY;

const Map = ({ pins, userPosition, className }: MapProps) => {
  const { error, loading } = useInjectKakaoMapApi({
    appkey: API_KEY!,
  });

  if (loading) {
    return <div>지도 로딩중</div>;
  }

  if (error) {
    return <div>지도 정보를 불러오는데 실패하였습니다</div>;
  }

  return (
    <KakaoMap
      center={{ lat: userPosition.x, lng: userPosition.y }}
      style={{
        width: "100%",
        height: "450px",
      }}
      className={className}
    >
      {pins.map((pin) => (
        <KakaoMapMarker key={pin.id} position={{ lat: pin.x, lng: pin.y }}>
          <Pin name={pin.name} />
        </KakaoMapMarker>
      ))}
      <KakaoMapMarker position={{ lat: userPosition.x, lng: userPosition.y }}>
        <Pin name="내 위치" />
      </KakaoMapMarker>
    </KakaoMap>
  );
};

export default Map;
