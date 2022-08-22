import { Chats, Rooms } from "./chat.action";

export type GetChatRoomResponse = {
  data: {
    rooms: Rooms;
  };
};

export type GetChatMessagesResponse = {
  data: {
    messages: Chats;
  };
};
