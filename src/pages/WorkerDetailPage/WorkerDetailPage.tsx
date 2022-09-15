import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useWorkerDetailQuery } from "@/domains/worker";
import { useActivityParams } from "@stackflow/react";
import { useFlow } from "@/stack";
import { useMemo } from "react";
import { PATH } from "@/constants";

import Tag from "@/components/@shared/Tag/Tag";
import Header from "@/components/@shared/Header/Header";
import Button from "@/components/@shared/Button/Button";
import * as S from "./WorkerDetailPage.styled";
import { useChatListQuery, useChatRoomCreateQuery } from "@/domains/chat/chat.api";
import { Room } from "@/domains/chat/chat.type";
import Lottie from "@/components/@shared/Lottie/Lottie.component";
import DefaultProfile from "@/assets/images/DefaultProfile.png";

const isEmptyObj = (obj: any) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
};

const WorkerDetailPage = () => {
  const { workerId } = useActivityParams<{ workerId: string }>();
  const { mutateAsync: chatRoomCreate } = useChatRoomCreateQuery();
  const { data, refetch } = useChatListQuery();
  const chatInfo = useMemo<Partial<Room>>(
    () => data?.data.rooms.filter((item) => item.otherUser.userId === Number(workerId))[0] ?? {},
    [data, workerId]
  );

  const { push, replace } = useFlow();

  if (Number.isNaN(Number(workerId))) {
    throw new Error("잘못된 cafeId 입니다.");
  }

  const {
    data: workerDetail,
    isError,
    isLoading,
  } = useWorkerDetailQuery(
    {
      id: Number(workerId),
    },
    {
      enabled: !!workerId,
      suspense: false,
    }
  );

  const handleReviewButtonClick = async () => {
    let curChatInfo = chatInfo;

    try {
      if (isEmptyObj(curChatInfo)) {
        await chatRoomCreate({ ownerUserId: Number(workerId) });
        const data = await refetch();
        curChatInfo = data!.data!.data.rooms?.filter((item) => item.otherUser.userId === Number(workerId))[0];
      }
      replace(PATH.WORK_CHAT.stack, {});
      push(PATH.WORK_CHAT.ROOM.stack, { roomId: curChatInfo.id });
    } catch (e: any) {
      if (e.response.status === 409) {
        replace(PATH.WORK_CHAT.stack, {});
        push(PATH.WORK_CHAT.ROOM.stack, { roomId: curChatInfo.id });
        return;
      }
      alert();
    }
  };

  if (isLoading) {
    return (
      <StackLayout isHide>
        <Header useBack />
        <Lottie source={require("@/assets/loading.json")} speed={2} />
      </StackLayout>
    );
  }

  if (isError || !workerDetail) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  return (
    <StackLayout>
      <S.WorkerDetailWrap>
        <S.TopInfo>
          <S.UserThumb>
            <img src={workerDetail.imageUrl ?? DefaultProfile} alt="워케이셔너 이미지" />
          </S.UserThumb>
          <S.UserName>{workerDetail.name}</S.UserName>
          <S.EtcInfo>
            <S.EtcList>{workerDetail.job}</S.EtcList>
            <S.EtcList>{workerDetail.yearOfService}</S.EtcList>
            <S.EtcChatList>
              {/* TODO : 워크챗 횟수 연동하기 */}
              워크챗
              <strong>
                {workerDetail.workChatCount !== 0 ? String(workerDetail.workChatCount).padStart(2, "0") : 0}
              </strong>
            </S.EtcChatList>
          </S.EtcInfo>
        </S.TopInfo>
        <S.DetailInfo>
          <S.AboutMe dangerouslySetInnerHTML={{ __html: workerDetail.story }}></S.AboutMe>
          <S.HopeTit>희망 활동</S.HopeTit>
          <S.HopeTag>
            {workerDetail.desiredActivities.map((activity, index) => (
              <Tag key={index} iconType={activity.icon}>
                {activity.text}
              </Tag>
            ))}
          </S.HopeTag>
        </S.DetailInfo>
        <Button size="lg" bgColor="black" onClick={handleReviewButtonClick}>
          워크챗 신청
        </Button>
      </S.WorkerDetailWrap>
    </StackLayout>
  );
};

export default WorkerDetailPage;
