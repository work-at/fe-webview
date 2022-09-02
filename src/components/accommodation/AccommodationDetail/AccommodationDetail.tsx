import Icon, { IconType } from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Header from "@/components/@shared/Header";
import Tag from "@/components/@shared/Tag/Tag";
import { PATH } from "@/constants";
import { useAccommodationDetailQuery } from "@/domains/accommodation/accommodation.api";
import { useUserAddressQuery } from "@/domains/user";
import useCoordinates from "@/services/useCoordinates/useCoordinates";
import { useFlow } from "@/stack";
import { getPathFindingURL } from "@/utils/kakao";
import { useActivityParams } from "@stackflow/react";
import { useCallback } from "react";
import * as S from "./AccommodationDetail.styled";

const AccommodationDetail = () => {
  const { accommodationId } = useActivityParams<{ accommodationId: string }>();
  const { push } = useFlow();

  const { data, isLoading, isError } = useAccommodationDetailQuery(
    {
      accommodationId: Number(accommodationId),
    },
    {}
  );

  const { userCoordinates } = useCoordinates();

  const { data: userAddress } = useUserAddressQuery(
    {
      lat: userCoordinates?.lat ?? 0,
      lng: userCoordinates?.lng ?? 0,
    },
    {
      enabled: !!userCoordinates,
      suspense: false,
    }
  );

  const handleReviewButtonClick = useCallback(() => {
    push(PATH.ACCOMMODATION.ACCOMMODATION_REVIEW.stack, { accommodationId });
  }, [accommodationId, push]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError || !data) {
    return <div>에러</div>;
  }

  const { accommodationDetail, accommodationReview } = data.data;

  console.log("data", data);

  const handleOpenKaKaoLink = () => {
    window.open(accommodationDetail?.relatedUrl);
  };

  const handleOpenKaKaoPathFindingLink = () => {
    userAddress && window.open(getPathFindingURL(userAddress, accommodationDetail.roadAddressName));
  };

  return (
    <StackLayout isHide>
      <Header useBack />
      <S.AccommodationDetailWrap>
        <S.VisualWrap>
          <img src={accommodationDetail?.imgUrl} alt="까페 이미지" />
        </S.VisualWrap>
        <S.InfoWrap>
          <S.Tit>{accommodationDetail?.name}</S.Tit>
          <S.TopInfo>
            <S.Info>
              <S.List>
                <Icon icon={"Addr"} size={18} />
                {accommodationDetail?.roadAddressName}
              </S.List>
              <S.List>
                <Icon icon={"Tel"} size={18} />
                <S.TelLink href="tel:02-1234-1234">{accommodationDetail?.phone}</S.TelLink>
              </S.List>
            </S.Info>
            <S.BtnMapWrap>
              <S.BtnMap onClick={handleOpenKaKaoPathFindingLink}>
                <Icon icon={"BtnDirecion"} size={43} />
              </S.BtnMap>
              <S.BtnMap onClick={handleOpenKaKaoLink}>
                <Icon icon={"BtnLocation"} size={43} />
              </S.BtnMap>
            </S.BtnMapWrap>
          </S.TopInfo>
          <S.WalkTit>
            <S.Num>{accommodationReview?.userCount}</S.Num>명의 워케이셔너가
            <br />
            리뷰를 남겼어요!
          </S.WalkTit>
          <S.ReviewWrap>
            {accommodationReview?.reviews.map((review) => (
              <Tag key={review.tag.name} reviews={review.count} iconType={review.tag.name as IconType}>
                {review.tag.content}
              </Tag>
            ))}
          </S.ReviewWrap>
        </S.InfoWrap>
        {accommodationReview?.reviews.length === 0 && (
          <S.BtnReview onClick={handleReviewButtonClick}>
            <Icon icon={"BtnReview"} size={73} />
          </S.BtnReview>
        )}
      </S.AccommodationDetailWrap>
    </StackLayout>
  );
};

export default AccommodationDetail;
