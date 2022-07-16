import { PinItem } from "../map.type";

export type CafePin = PinItem;

export type Cafe = {
  id: number;
  name: string;
  region: string;
  tags: string[];
};
