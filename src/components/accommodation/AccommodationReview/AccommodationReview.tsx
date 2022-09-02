import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import CheckBox from "@/components/@shared/CheckBox";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";
import { useReviewAccommodationMutation } from "@/domains/accommodation/accommodation.api";
import { useFlow } from "@/stack";
import * as S from "./AccommodationReview.styled";
import { AccommodationReviewTag } from "@/domains/accommodation/accommodation.dto";
import { useActivityParams } from "@stackflow/react";
import { ACCOMMODATION_REVIEW_TAGS } from "@/domains/common.constant";
import Header from "@/components/@shared/Header";

const reviewItems = ACCOMMODATION_REVIEW_TAGS.map((review) => ({
  id: review.name,
  label: review.content,
  iconType: review.name,
}));

const AccommodationReview = () => {
  const { accommodationId } = useActivityParams<{ accommodationId: string }>();
  const { selected, onChange } = useMultiselect<AccommodationReviewTag>([]);
  const { pop } = useFlow();
  const { mutateAsync } = useReviewAccommodationMutation();

  const handlePostReview = async () => {
    try {
      await mutateAsync({
        accommodationId: Number(accommodationId),
        tags: selected,
      });
      pop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StackLayout isHide>
      <Header bgColor useBack />
      <S.ReviewWriteWrap>
        <S.Tit>
          어떤 점이 워케이션 중<br />
          가장 좋았나요?
        </S.Tit>
        <S.SubTit>이 장소의 장점을 골라주세요! (복수선택)</S.SubTit>
        <S.CheckWrap>
          <CheckBox selectedItemIds={selected} onChange={onChange} isIcon items={reviewItems} />
        </S.CheckWrap>

        <Button size="lg" bgColor="black" onClick={handlePostReview} disabled={!selected.length}>
          등록하기
        </Button>
      </S.ReviewWriteWrap>
    </StackLayout>
  );
};

export default AccommodationReview;
