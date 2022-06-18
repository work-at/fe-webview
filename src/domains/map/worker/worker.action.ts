import { Worker } from "./worker.type";

export type WorkersCriteria = {
  x: number;
  y: number;
};

export type WorkersCommand = {
  x: number;
  y: number;
};

export type WorkersInfo = Worker[];