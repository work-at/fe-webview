import { Worker, WorkerDetail, WorkerPin } from "./worker.type";

export type WorkerCriteria = {
  id: number;
};

export type WorkerDetailCriteria = {
  id: number;
};

export type WorkerPinsInfo = WorkerPin[];

export type WorkerInfo = Worker;

export type WorkersInfo = Worker[];

export type WorkerDetailInfo = WorkerDetail;
