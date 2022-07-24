import { Worker, WorkerDetail, WorkerPin } from "./worker.type";

export type WorkerPinsCriteria = {
  lat: number;
  lng: number;
};

export type WorkerCriteria = {
  id: number;
};

export type WorkersCriteria = {
  lat: number;
  lng: number;
};

export type WorkerDetailCriteria = {
  id: number;
};

export type WorkerPinsInfo = WorkerPin[];

export type WorkerInfo = Worker;

export type WorkersInfo = Worker[];

export type WorkerDetailInfo = WorkerDetail;
