import { DinerPin } from "./diner.type";

export type DinerPinsCriteria = {
  lat: number;
  lng: number;
  page: number;
};

export type DinerPinsInfo = DinerPin[];
