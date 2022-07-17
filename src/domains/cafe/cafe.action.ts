import { Cafe, CafePin } from "./cafe.type";

export type CafePinsCriteria = {
  lat: number;
  lng: number;
  page: number;
};

export type CafeCriteria = {
  id: number;
};

export type CafePinsInfo = CafePin[];

export type CafeInfo = Cafe;
