import { Worker, WorkerPin } from "./worker.type";

export type WorkerPinsCriteria = {
  lat: number;
  lng: number;
  page: number;
};

export type WorkerCriteria = {
  id: number;
};

export type WorkerPinsInfo = WorkerPin[];

export type WorkerInfo = Worker;
