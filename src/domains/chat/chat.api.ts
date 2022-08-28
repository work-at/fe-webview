import { AxiosError, AxiosResponse } from "axios";
import { MutationFunction, QueryFunction, useMutation, useQuery } from "react-query";

import * as DTO from "./chat.dto";
import * as Action from "./chat.action";

import { API_URL, QUERY_NAME } from "@/constants";
import { baseInstance } from "@/services";

// 채팅방을 생성하는 api
// TODO: 송원님 useWorkerDetailQuery 작업된 이후 연결해야 함
export const requestChatRoomCreate: MutationFunction<AxiosResponse<null>, Action.CreateChatRoom> = async ({
  ownerUserId,
}: Action.CreateChatRoom) => {
  return await baseInstance().post(API_URL.POST_CHAT_ROOM_CREATE(ownerUserId));
};

export const useChatRoomCreateQuery = () => {
  return useMutation<AxiosResponse<null>, AxiosError<{ message: string }>, Action.CreateChatRoom>({
    mutationFn: requestChatRoomCreate,
  });
};

// 채팅 메세지를 생성하는 api
export const requestChatSend: MutationFunction<AxiosResponse<null>, Action.SendChat> = async ({
  roomId,
  message,
}: Action.SendChat) => {
  return await baseInstance().post(API_URL.POST_CHAT_SEND(roomId, message));
};

export const useChatSendQuery = () => {
  return useMutation<AxiosResponse<null>, AxiosError<{ message: string }>, Action.SendChat>({
    mutationFn: requestChatSend,
  });
};

// 채팅방을 나가는 api
export const requestChatRemove = async ({ roomId }: Action.DeleteChat) => {
  return await baseInstance().delete(API_URL.DELETE_CHAT(roomId));
};

export const useChatRemoveQuery = () => {
  return useMutation(requestChatRemove);
};

// 유저 A가 신청 받은 채팅을 시작하는 로직 api
export const requestChatConfirm: MutationFunction<AxiosResponse<null>, Action.ConfirmChat> = async ({
  roomId,
}: Action.ConfirmChat) => {
  return await baseInstance().post(API_URL.POST_CHAT_CONFIRM(roomId));
};

export const useChatConfirmQuery = () => {
  return useMutation<AxiosResponse<null>, AxiosError<{ message: string }>, Action.ConfirmChat>({
    mutationFn: requestChatConfirm,
  });
};

// 채팅 메세지를 가져오는 api
type ChatMessagesQueryKey = readonly [typeof QUERY_NAME.GET_CHAT, Action.ChatMessages];

export const requestChat = async ({ messageId, roomId, sortType }: Action.ChatMessages) =>
  await baseInstance().get<unknown, DTO.GetChatMessagesResponse>(
    API_URL.GET_CHAT_MESSAGES(roomId, messageId, sortType)
  );

export const requestChatMessages: QueryFunction<DTO.GetChatMessagesResponse, ChatMessagesQueryKey> = async ({
  queryKey,
}) => {
  const [, { messageId, roomId, sortType }] = queryKey;

  return await requestChat({ messageId, roomId, sortType });
};

// export const useChatMessagesQuery = ({ messageId, roomId, sortType }: Action.ChatMessages) => {
//   return useQuery<DTO.GetChatMessagesResponse, AxiosError<string>, DTO.GetChatMessagesResponse, ChatMessagesQueryKey>(
//     [QUERY_NAME.GET_CHAT, { messageId, roomId, sortType }],
//     requestChatMessages
//     // {
//     //   staleTime: Infinity,
//     //   cacheTime: Infinity,
//     // }
//   );
// };

// 유저 A가 채팅방에서 마지막으로 읽은 메세지를 최신화 해주는 api
export const requestLastMessage: MutationFunction<AxiosResponse<null>, Action.LastMessage> = async ({
  roomId,
  lastMessageId,
}: Action.LastMessage) => {
  return await baseInstance().post(API_URL.POST_LAST_MESSAGE(roomId, lastMessageId));
};

export const useLastMessageQuery = () => {
  return useMutation<AxiosResponse<null>, AxiosError<{ message: string }>, Action.LastMessage>({
    mutationFn: requestLastMessage,
  });
};

// 채팅방을 가져오는 api
export const requestChatList: QueryFunction<DTO.GetChatRoomResponse> = async () => {
  return await baseInstance().get<unknown, DTO.GetChatRoomResponse>(API_URL.GET_CHAT_LIST);
};

export const useChatListQuery = () => {
  return useQuery<DTO.GetChatRoomResponse, AxiosError<{ message: string }>>(
    [QUERY_NAME.GET_CHAT_LIST],
    requestChatList
  );
};

// 상대방을 차단하는 api
export const requestBlockUser = async ({ blockUserId }: Action.BlockUser) => {
  return await baseInstance().post(API_URL.POST_BLOCK_USER(blockUserId));
};

export const useBlockUser = () => {
  return useMutation(requestBlockUser);
};
