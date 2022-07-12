import { CafePin } from "./cafe.type";

export type CafePinsCriteria = {
  lat: number;
  lng: number;
  page: number;
};

export type CafePinsInfo = CafePin[];
