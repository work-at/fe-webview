import { Diner, DinerDetail, DinerPin } from "./diner.type";

export type DinerPinsCriteria = {
  lat: number;
  lng: number;
  page: number;
};

export type DinerCriteria = {
  id: number;
};

export type DinerDetailCriteria = {
  id: number;
};

export type DinerPinsInfo = DinerPin[];

export type DinerInfo = Diner;

export type DinerDetailInfo = DinerDetail;
