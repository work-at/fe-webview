import { AxiosResponse } from "axios";
import { DESIRED_ACTIVITIES } from "../common.constant";

export type GetWorkerPinsRequest = {
  kilometer: number;
};

type WorkerPin = {
  id: number;
  latitude: number;
  longitude: number;
};

export type GetWorkerPinsResponse = AxiosResponse<{ response: WorkerPin[] }>;

export type GetWorkersRequest = {
  kilometer: number;
};

type Worker = {
  id: number;
  nickname: string;
  imageUrl?: string;
  position: {
    // TODO : enum 처리하기
    name: string;
    content: string;
  };
  workingYear: {
    name: string;
    content: string;
  };
  activities: {
    name: string;
    content: string;
  }[];
  workchats: number;
};

export type GetWorkersResponse = AxiosResponse<{ response: Worker[] }>;

export type GetWorkerRequest = {
  userId: number;
};

type WorkerDetail = {
  id: 1;
  imageUrl?: string;
  nickname: string;
  position: {
    content: string;
    name: string;
  };
  story: string;
  workingYear: {
    content: string;
    name: string;
  };
  company: string;
  workchats: number;
  activities: {
    name: string;
    content: string;
  }[];
};

export type GetWorkerDetailResponse = AxiosResponse<WorkerDetail>;

export type GetWorkersCountingRequest = {
  kilometer: number;
};

export type GetWorkersCountingResponse = AxiosResponse<{
  count: number;
}>;
