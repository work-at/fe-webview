import { PATH } from "@/constants";
import { useCafeDetailQuery } from "@/domains/cafe";
import { Suspense, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CafeDetailPage = () => {
  const { cafeId } = useParams<{ cafeId: string }>();
  const navigate = useNavigate();

  if (Number.isNaN(Number(cafeId))) {
    throw new Error("잘못된 cafeId 입니다.");
  }

  const { data: cafeDetail } = useCafeDetailQuery(
    {
      id: Number(cafeId),
    },
    {
      enabled: !!cafeId,
      suspense: true,
    }
  );

  const handleReviewButtonClick = useCallback(() => {
    navigate(`${PATH.CAFE.CAFE_REVIEW.full}/${cafeId}`);
  }, []);

  return (
    <div>
      카페 아이디 : {cafeId} <button onClick={handleReviewButtonClick}>click</button>
    </div>
  );
};

const CafeDetailPageSuspense = () => (
  <Suspense fallback={<div>로딩 중</div>}>
    <CafeDetailPage />
  </Suspense>
);

export default CafeDetailPageSuspense;
