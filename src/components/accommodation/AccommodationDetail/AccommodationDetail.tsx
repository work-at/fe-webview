import Icon, { IconType } from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Header from "@/components/@shared/Header";
import Lottie from "@/components/@shared/Lottie/Lottie.component";
import Tag from "@/components/@shared/Tag/Tag";
import { PATH } from "@/constants";
import { useAccommodationDetailQuery } from "@/domains/accommodation/accommodation.api";
import { useUserAddressQuery } from "@/domains/user";
import useCoordinates from "@/services/useCoordinates/useCoordinates";
import { useFlow } from "@/stack";
import { getPathFindingURL } from "@/utils/kakao";
import { decimalFormatter } from "@/utils/stringUtil";
import { useActivityParams } from "@stackflow/react";
import { useCallback } from "react";
import * as S from "./AccommodationDetail.styled";

const AccommodationDetail = () => {
  const { accommodationId } = useActivityParams<{ accommodationId: string; userAddress: string }>();

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

  const { push } = useFlow();

  const { data, isLoading, isError } = useAccommodationDetailQuery(
    {
      accommodationId: Number(accommodationId),
    },
    {}
  );

  const handleReviewButtonClick = useCallback(() => {
    push(PATH.ACCOMMODATION.ACCOMMODATION_REVIEW.stack, { accommodationId });
  }, [accommodationId, push]);

  if (isLoading) {
    return (
      <StackLayout isHide>
        <Header useBack />
        <Lottie source={require("@/assets/loading.json")} speed={2} />
      </StackLayout>
    );
  }

  if (isError || !data) {
    return (
      <StackLayout isHide>
        <Header useBack />
        <div>에러</div>
      </StackLayout>
    );
  }

  const { accommodationDetail, accommodationReview } = data.data;

  const handleOpenKaKaoLink = () => {
    window.open(accommodationDetail?.relatedUrl);
  };

  const handleOpenKaKaoPathFindingLink = () => {
    const kakaoLinkFragments = accommodationDetail.placeUrl.split("/");
    const placeId = kakaoLinkFragments[kakaoLinkFragments.length - 1];

    userAddress && window.open(getPathFindingURL(userAddress, accommodationDetail.name, placeId));
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
                <Icon icon={"Price"} size={18} />
                1박 평균 {decimalFormatter(Math.round(accommodationDetail?.price / 7))}원~
              </S.List>
              <S.List>
                <Icon icon={"Addr"} size={18} />
                {accommodationDetail?.roadAddressName}
              </S.List>
              <S.List>
                <Icon icon={"Tel"} size={18} />
                <S.TelLink href={`tel:${accommodationDetail?.phone}`}>
                  {accommodationDetail?.phone === "" ? "제공되지 않음" : accommodationDetail?.phone}
                </S.TelLink>
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
        {!accommodationReview?.userReviewed && (
          <S.BtnReview onClick={handleReviewButtonClick}>
            <Icon icon={"BtnReview"} size={73} />
          </S.BtnReview>
        )}
      </S.AccommodationDetailWrap>
    </StackLayout>
  );
};

export default AccommodationDetail;
