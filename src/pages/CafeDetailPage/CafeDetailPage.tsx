import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { PATH } from "@/constants";
import { useCafeDetailQuery } from "@/domains/cafe";
import { useFlow } from "@/stack";
import { useActivityParams } from "@stackflow/react";
import { Suspense, useCallback } from "react";

const CafeDetailPage = () => {
  const { cafeId } = useActivityParams<{ cafeId: string }>();
  const { push } = useFlow();

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
    push(PATH.CAFE.CAFE_REVIEW.stack, { cafeId });
  }, []);

  return (
    <StackLayout appBar={{ title: "내 주변 카페" }}>
      카페 아이디 : {cafeId}
      <button onClick={handleReviewButtonClick}>click</button>
    </StackLayout>
  );
};

const CafeDetailPageSuspense = () => (
  <Suspense fallback={<div>로딩 중</div>}>
    <CafeDetailPage />
  </Suspense>
);

export default CafeDetailPageSuspense;
