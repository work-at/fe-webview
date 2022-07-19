import { Cafe, CafeDetail, CafePin } from "./cafe.type";

export type CafePinsCriteria = {
  lat: number;
  lng: number;
  page: number;
};

export type CafeCriteria = {
  id: number;
};

export type CafeDetailCriteria = {
  id: number;
};

export type CafePinsInfo = CafePin[];

export type CafeInfo = Cafe;

export type CafeDetailInfo = CafeDetail;
