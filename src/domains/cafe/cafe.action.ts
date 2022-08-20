import { Cafe, CafeDetail, CafePin } from "./cafe.type";

export type CafePinsCriteria = {
  lat: number;
  lng: number;
};

export type CafeCriteria = {
  id: number;
};

export type CafesCriteria = {
  lat: number;
  lng: number;
};

export type CafeDetailCriteria = {
  id: number;
};

export type CafePinsInfo = CafePin[];

export type CafeDetailInfo = CafeDetail;

export type CafesInfo = Cafe[];
