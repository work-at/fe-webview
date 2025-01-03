import { Diner, DinerDetail, DinerPin } from "./diner.type";

export type DinerPinsCriteria = {
  lat: number;
  lng: number;
};

export type DinerCriteria = {
  id: number;
};

export type DinersCriteria = {
  lat: number;
  lng: number;
};

export type DinerDetailCriteria = {
  id: number;
};

export type DinerPinsInfo = DinerPin[];

export type DinerInfo = Diner;

export type DinersInfo = Diner[];

export type DinerDetailInfo = DinerDetail;
