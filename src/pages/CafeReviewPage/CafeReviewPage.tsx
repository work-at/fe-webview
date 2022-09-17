import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import Header from "@/components/@shared/Header/Header";
import CheckBox from "@/components/@shared/CheckBox/CheckBox";
import * as S from "./CafeReviewPage.styled";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";
import { CafeReviewKey, useCafeReviewListQuery, usePostCafeReview } from "@/domains/cafe";
import { useActivityParams } from "@stackflow/react";
import { useFlow } from "@/stack";
import { useMemo } from "react";

const CafeReviewPage = () => {
  const { cafeId } = useActivityParams<{ cafeId: string }>();
  const { data } = useCafeReviewListQuery();
  const { mutateAsync } = usePostCafeReview();
  const { selected, onChange } = useMultiselect([]);
  const { pop } = useFlow();

  const reviewList = useMemo(
    () =>
      data?.data?.tags.map((item) => ({
        id: item.name,
        label: item.content,
        isIcon: true,
        iconType: item.name + "_B",
      })),
    [data?.data?.tags]
  );

  const handlePostReview = async () => {
    try {
      await mutateAsync({ reviewTypeNames: selected as CafeReviewKey[], locationId: cafeId });
      pop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StackLayout isHide>
      <Header bgColor useBack />
      <S.PlaceViewWrap>
        <S.Tit>
          어떤 점이 워케이션 중<br />
          가장 좋았나요?
        </S.Tit>
        <S.SubTit>이 장소의 장점을 골라주세요! (복수선택)</S.SubTit>
        <S.CheckWrap>
          {reviewList && <CheckBox isIcon selectedItemIds={selected} onChange={onChange} items={reviewList} />}
        </S.CheckWrap>
      </S.PlaceViewWrap>
      <Button size="lg" bgColor="black" onClick={handlePostReview} disabled={!selected.length}>
        등록하기
      </Button>
    </StackLayout>
  );
};

export default CafeReviewPage;
