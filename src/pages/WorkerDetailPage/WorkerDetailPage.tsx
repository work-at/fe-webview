import { PATH } from "@/constants";
import { useWorkerDetailQuery } from "@/domains/worker";
import { Suspense, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WorkerDetailPage = () => {
  const { workerId } = useParams<{ workerId: string }>();
  const navigate = useNavigate();

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
    navigate(`${PATH.WORK_CHAT.full}/${workerId}`);
  }, []);

  return (
    <div>
      워케이셔너 아이디 : {workerId} <button onClick={handleReviewButtonClick}>click</button>
    </div>
  );
};

const WorkerDetailPageSuspense = () => (
  <Suspense fallback={<div>로딩 중</div>}>
    <WorkerDetailPage />
  </Suspense>
);

export default WorkerDetailPageSuspense;
