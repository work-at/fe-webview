import { DesiredActivity, Job, YearOfService } from "../common.type";
import { UserAddress } from "./user.type";

export type UserAddressCriteria = {
  lat: number;
  lng: number;
};

export type UserAddressInfo = UserAddress;

export type UpdateUserInfoCommand = {
  nickName: string;
  job: Job;
  yearOfService: YearOfService;
  story: string;
  desiredActivities: DesiredActivity[];
};
