export type GetAddressAndNearWorkerCountRequest = {
  kilometer: number;
  latitude: string;
  longitude: string;
};

export type GetAddressAndNearWorkerCountResponse = {
  address: string;
  count: number;
};

type Activity = {
  content: string;
  name: string;
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
};

export type PutUserProfileRequest = {
  activities: string[];
  nickname: string;
  position: string;
  story: string;
  workingYear: string;
};
