import { IconType } from "@/assets/Icon";
import { PinItem } from "../map.type";

export type WorkerPin = PinItem;

export type Worker = {
  id: number;
  name: string;
  imageUrl?: string;
  job: string;
  yearOfService: string;
  tags: string[];
};

type DesiredActivity = {
  icon: IconType;
  text: string;
};

export type WorkerDetail = {
  imageUrl?: string;
  name: string;
  // TODO : story data에 XSS 공격 방어 코드 작성 + 소개글을 올리기 전에 스크립트 검사 수행
  story: string;
  job: string;
  yearOfService: string;
  desiredActivities: DesiredActivity[];
  workChatCount: number;
};
