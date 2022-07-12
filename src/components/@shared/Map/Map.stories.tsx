import { Z_INDEX } from "@/constants/zIndex";
import { Meta, Story } from "@storybook/react";

import Map, { MapProps } from "./Map";
import CAFE_DINER_PIN_PNG from "@/assets/images/cafe-diner-pin.png";
import SELECTED_CAFE_DINER_PIN_PNG from "@/assets/images/selected-cafe-diner-pin.png";

export default {
  title: "Components/Shared/Map",
  component: Map,
} as Meta;

const Template: Story<MapProps> = () => (
  <div style={{ width: "360px", height: "360px" }}>
    <Map
      pins={[]}
      userCoordinates={{ lat: 37.5881066, lng: 126.9948464 }}
      zIndex={Z_INDEX.MIDDLE}
      pinImage={CAFE_DINER_PIN_PNG}
      selectedPinImage={SELECTED_CAFE_DINER_PIN_PNG}
      pinSize={{
        width: 26,
        height: 36,
      }}
      selectedPinSize={{
        width: 42,
        height: 60,
      }}
    />
  </div>
);

export const Basic = Template.bind({});

Basic.play = async ({ canvasElement }: any) => {
  // 핀 정보가 넘어가면 핀을 지도상에 렌더링한다.
  // 핀을 선택하면 지도가 핀이 중앙으로 오도록 이동한다.
  // 핀을 선택 후 지도가 중앙으로 이동한 후에는 핀 상세정보가 렌더링 된다.
  // 핀 상세 정보에서 더보기를 클릭하면 라우팅이 발생한다.
};
