import { DesiredActivity, Job, YearOfService } from "../common.type";

export type UserAddressCriteria = {
  lat: number;
  lng: number;
};

export type UserAddressInfo = string;

export type UpdateUserInfoCommand = {
  nickName: string;
  job: Job;
  yearOfService: YearOfService;
  story: string;
  desiredActivities: DesiredActivity[];
};

export type NearWorkersCountInfo = {
  count: number;
};

export type SyncUserLocationCommand = {
  lat: number;
  lng: number;
};
