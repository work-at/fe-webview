import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useWorkerDetailQuery } from "@/domains/worker";
import { useActivityParams } from "@stackflow/react";
import { useFlow } from "@/stack";
import { Suspense, useCallback } from "react";
import { PATH } from "@/constants";

import Tag from "@/components/@shared/Tag/Tag";
import Header from "@/components/@shared/Header/Header";
import Button from "@/components/@shared/Button/Button";
import * as S from "./WorkerDetailPage.styled";

const WorkerDetailPage = () => {
  const { workerId } = useActivityParams<{ workerId: string }>();
  const { push } = useFlow();

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
      suspense: true,
    }
  );

  const handleReviewButtonClick = useCallback(() => {
    push(PATH.WORK_CHAT.stack, { workerId });
  }, [push, workerId]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError || !workerDetail) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  return (
    <StackLayout>
      <Header useBack bgColor />
      <S.WorkerDetailWrap>
        <S.TopInfo>
          <S.UserThumb>
            <img src={workerDetail.imageUrl} alt="워케이셔너 이미지" />
          </S.UserThumb>
          <S.UserName>{workerDetail.name}</S.UserName>
          <S.EtcInfo>
            <S.EtcList>{workerDetail.job}</S.EtcList>
            <S.EtcList>{workerDetail.yearOfService}년차</S.EtcList>
            <S.EtcChatList>
              {/* TODO : 워크챗 횟수 연동하기 */}
              워크챗<strong>05</strong>
            </S.EtcChatList>
          </S.EtcInfo>
        </S.TopInfo>
        <S.DetailInfo>
          <S.AboutMe dangerouslySetInnerHTML={{ __html: workerDetail.story }}></S.AboutMe>
          <S.HopeTit>희망 활동</S.HopeTit>
          <S.HopeTag>
            {workerDetail.desiredActivities.map((activity, index) => (
              <Tag key={index} walkChat iconType={activity.icon}>
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

const WorkerDetailPageSuspense = () => (
  <Suspense fallback={<div>로딩 중</div>}>
    <WorkerDetailPage />
  </Suspense>
);

export default WorkerDetailPageSuspense;
