import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useWorkerDetailQuery } from "@/domains/worker";
import { useActivityParams } from "@stackflow/react";
import { useFlow } from "@/stack";
import { Suspense, useCallback } from "react";
import { PATH } from "@/constants";

const WorkerDetailPage = () => {
  const { workerId } = useActivityParams<{ workerId: string }>();
  const { push } = useFlow();

  if (Number.isNaN(Number(workerId))) {
    throw new Error("잘못된 cafeId 입니다.");
  }

  const { data: workerDetail } = useWorkerDetailQuery(
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
  }, []);

  return (
    <StackLayout>
      워케이셔너 아이디 : {workerId}
      <button onClick={handleReviewButtonClick}>click</button>
    </StackLayout>
  );
};

const WorkerDetailPageSuspense = () => (
  <Suspense fallback={<div>로딩 중</div>}>
    <WorkerDetailPage />
  </Suspense>
);

export default WorkerDetailPageSuspense;
