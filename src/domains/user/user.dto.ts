import { AxiosResponse } from "axios";
import { Report } from "../common.type";

export type PostUserAddressRequest = {
  latitude: number;
  longitude: number;
};

export type PostUserAddressResponse = AxiosResponse<{
  address: string;
}>;

type Activity = {
  content: string;
  name: string;
};

export type GetNearWorkersCountingRequest = {
  kilometer: number;
};

export type GetNearWorkersCountingResponse = {
  count: number;
};

export type PostSyncRequest = {
  latitude: number;
  longitude: number;
};

export type GetUserInfoResponse = {
  certified: boolean;
  activities: Activity[];
  id: number;
  imageUrl: string;
  nickname: string;
  position: {
    content: string;
    name: string;
  };
  story: string;
  workchats: number;
  workingYear: {
    content: string;
    name: string;
  };
  trackingOff: boolean;
};

export type PutUserProfileRequest = {
  activities: string[];
  nickname: string;
  position: string;
  story: string;
  workingYear: string;
};

export type PostUserReport = {
  content: string;
  email: string;
  type: Report;
};
