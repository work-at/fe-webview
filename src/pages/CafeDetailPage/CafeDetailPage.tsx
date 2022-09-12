import { useCallback } from "react";

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
import useCoordinates from "@/services/useCoordinates/useCoordinates";
import Lottie from "@/components/@shared/Lottie/Lottie.component";

const DEFAULT_CAFE_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";

const CafeDetailPage = () => {
  const { cafeId } = useActivityParams<{ cafeId: string }>();
  const { push } = useFlow();

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
      suspense: false,
    }
  );

  const handleReviewButtonClick = useCallback(() => {
    push(PATH.CAFE.CAFE_REVIEW.stack, { cafeId });
  }, [cafeId, push]);

  const handleOpenKaKaoLink = useCallback(() => {
    window.open(cafeDetail?.kakaoLink);
  }, [cafeDetail?.kakaoLink]);

  const handleOpenKaKaoPathFindingLink = useCallback(() => {
    userAddress && cafeDetail && window.open(getPathFindingURL(userAddress, cafeDetail.address));
  }, [userAddress, cafeDetail]);

  if (isLoading) {
    return (
      <StackLayout isHide>
        <Header useBack />
        <Lottie source={require("@/assets/loading.json")} />
      </StackLayout>
    );
  }

  if (isError || !cafeDetail) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  const totalReviewCount = cafeDetail.reviewPoints.reduce((acc, point) => acc + point.reviewCount, 0);

  return (
    <StackLayout isHide>
      <Header useBack />
      <S.CafeDetailWrap>
        <S.VisualWrap>
          <img
            src={cafeDetail.imageUrl === "" || !cafeDetail.imageUrl ? DEFAULT_CAFE_IMAGE : cafeDetail.imageUrl}
            alt="까페 이미지"
          />
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
              <Tag key={reviewPoint.reason} reviews={reviewPoint.reviewCount} iconType={reviewPoint.icon}>
                {reviewPoint.reason}
              </Tag>
            ))}
          </S.ReviewWrap>
        </S.InfoWrap>
        {!cafeDetail.isReviewed && (
          <S.BtnReview onClick={handleReviewButtonClick}>
            <Icon icon={"BtnReview"} size={73} />
          </S.BtnReview>
        )}
      </S.CafeDetailWrap>
    </StackLayout>
  );
};

export default CafeDetailPage;
