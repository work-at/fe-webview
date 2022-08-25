export type Room = {
  allRead: boolean;
  blockedByOtherUser: boolean;
  createdDate: string;
  deletedByOtherUser: boolean;
  id: number;
  lastMessage: string;
  lastMessageId: number;
  otherUser: {
    owner: boolean;
    userId: number;
    userNickname: string;
    userProfileUrl: string;
    position: string;
    workingYear: string;
  };
  start: boolean;
};

export type Chat = {
  createdDate: string;
  id: number;
  message: string;
  writerId: number;
};
