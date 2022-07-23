import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Button from "@/components/@shared/Button/Button";
import Header from "@/components/@shared/Header/Header";
import CheckBox from "@/components/@shared/CheckBox/CheckBox";
import * as S from "./DinerReviewPage.styled";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";
import { DinerReviewKey, useDinerReviewListQuery, usePostDinerReview } from "@/domains/diner";
import { useActivityParams } from "@stackflow/react";

const DinerReviewPage = () => {
  const { dinerId } = useActivityParams<{ dinerId: string }>();
  const { data } = useDinerReviewListQuery();
  const { mutateAsync } = usePostDinerReview();

  const { selected, isSelected, onChange } = useMultiselect([]);

  const reviewList = data?.data?.response.map((item) => ({
    id: item.name,
    label: item.content,
    isIcon: true,
    iconType: item.iconType,
  }));

  const handlePostReview = () => {
    try {
      mutateAsync({ reviewTypeNames: selected as DinerReviewKey[], locationId: dinerId });
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
          {reviewList && <CheckBox isSelected={isSelected} onChange={onChange} items={reviewList} />}
        </S.CheckWrap>
      </S.PlaceViewWrap>
      <Button size="lg" bgColor="black" onClick={handlePostReview} disabled={!selected.length}>
        등록하기
      </Button>
    </StackLayout>
  );
};

export default DinerReviewPage;
