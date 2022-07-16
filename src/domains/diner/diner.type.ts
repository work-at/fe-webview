import { PinItem } from "../map.type";

export type DinerPin = PinItem;

export type Diner = {
  id: number;
  name: string;
  region: string;
  tags: string[];
};
