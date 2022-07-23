export type GetAddressAndNearWorkerCountRequest = {
  kilometer: number;
  latitude: string;
  longitude: string;
};

export type GetAddressAndNearWorkerCountResponse = {
  address: string;
  count: number;
};

export type GetUserInfoResponse = {
  certified: boolean;
  id: number;
  imageUrl: string;
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
};
