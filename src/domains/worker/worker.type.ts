import { PinItem } from "../map.type";

export type WorkerPin = PinItem;

export type Worker = {
  id: number;
  name: string;
  job: string;
  yearOfService: number;
  tags: string[];
};
