import { Chat, Room } from "./chat.type";

export type Rooms = Room[];

export type DeleteChat = {
  roomId: number;
};

export type BlockUser = {
  blockUserId: number;
};

export type Chats = Chat[];

export type ChatMessages = {
  messageId?: number;
  roomId: number;
  sortType?: "BEFORE" | "AFTER";
};

export type SendChat = {
  roomId: number;
  message: string;
};

export type ConfirmChat = {
  roomId: number;
};

export type CreateChatRoom = {
  ownerUserId: number;
};

export type LastMessage = {
  roomId: number;
  lastMessageId: number;
};
