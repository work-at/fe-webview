import { Suspense, useCallback } from "react";

import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { PATH } from "@/constants";
import { useCafeDetailQuery } from "@/domains/cafe";
import { useFlow } from "@/stack";
import { useActivityParams } from "@stackflow/react";

import * as S from "./CafeDetailPage.styled";
import Header from "@/components/@shared/Header";
import Icon from "@/assets/Icon";
import Tag from "@/components/@shared/Tag/Tag";
import { getPathFindingURL } from "@/utils/kakao";
import { useUserAddressQuery } from "@/domains/user";
import { useCoordinatesService } from "@/services/useCoordinates/useCoordinates";

const CafeDetailPage = () => {
  const { cafeId } = useActivityParams<{ cafeId: string }>();
  const { push } = useFlow();

  const { data: userCoordinates } = useCoordinatesService();

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

  if (Number.isNaN(Number(cafeId))) {
    throw new Error("잘못된 cafeId 입니다.");
  }

  const {
    data: cafeDetail,
    isLoading,
    isError,
  } = useCafeDetailQuery(
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
  }, [cafeId, push]);

  const handleOpenKaKaoLink = useCallback(() => {
    window.open(cafeDetail?.kakaoLink);
  }, [cafeDetail?.kakaoLink]);

  const handleOpenKaKaoPathFindingLink = useCallback(() => {
    userAddress && cafeDetail && window.open(getPathFindingURL(userAddress.address, cafeDetail.address));
  }, [userAddress, cafeDetail]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError || !cafeDetail) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  const totalReviewCount = cafeDetail.reviewPoints.reduce((acc, point) => acc + point.reviewCount, 0);

  return (
    <StackLayout appBar={{ title: "내 주변 카페" }}>
      <Header useBack />
      <S.CafeDetailWrap>
        <S.VisualWrap>
          <img src={cafeDetail.imageUrl} alt="까페 이미지" />
        </S.VisualWrap>
        <S.InfoWrap>
          <S.Tit>{cafeDetail.name}</S.Tit>
          <S.TopInfo>
            <S.Info>
              <S.List>
                <Icon icon={"Addr"} size={18} />
                {cafeDetail?.address}
              </S.List>
              <S.List>
                <Icon icon={"Tel"} size={18} />
                <S.TelLink href="tel:02-1234-1234">{cafeDetail.phoneNumber}</S.TelLink>
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
            <S.Num>{totalReviewCount}</S.Num>명의 워케이셔너가
            <br />
            리뷰를 남겼어요!
          </S.WalkTit>
          <S.ReviewWrap>
            {cafeDetail.reviewPoints.map((reviewPoint) => (
              <Tag key={reviewPoint.reason} reviews={200} iconType={reviewPoint.icon}>
                {reviewPoint.reason}
              </Tag>
            ))}

            <Tag reviews={120} iconType={"CommonReview3"}>
              가성비가 좋아요
            </Tag>
            <Tag reviews={90} iconType={"CommonReview4"}>
              사람이 많이 없어요
            </Tag>
            <Tag reviews={42} iconType={"CommonReview5"}>
              넓고 깨끗해요
            </Tag>
          </S.ReviewWrap>
        </S.InfoWrap>
        <S.BtnReview onClick={handleReviewButtonClick}>
          <Icon icon={"BtnReview"} size={73} />
        </S.BtnReview>
      </S.CafeDetailWrap>
    </StackLayout>
  );
};

const CafeDetailPageSuspense = () => (
  <Suspense fallback={<div>로딩 중</div>}>
    <CafeDetailPage />
  </Suspense>
);

export default CafeDetailPageSuspense;
