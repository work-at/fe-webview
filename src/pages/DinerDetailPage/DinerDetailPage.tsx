import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Header from "@/components/@shared/Header";
import { useActivityParams } from "@stackflow/react";

import * as S from "./DinerDetailPage.styled";
import Icon, { IconType } from "@/assets/Icon";
import Tag from "@/components/@shared/Tag/Tag";
import { getPathFindingURL } from "@/utils/kakao";
import { useUserAddressQuery } from "@/domains/user";
import { useFlow } from "@/stack";
import { useCallback } from "react";
import { PATH } from "@/constants";
import { useDinerDetailQuery } from "@/domains/diner";
import useCoordinates from "@/services/useCoordinates/useCoordinates";

const DEFAULT_DINER_IMAGE =
  "https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";

const DinerDetailPage = () => {
  const { dinerId } = useActivityParams<{ dinerId: string }>();
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

  if (Number.isNaN(Number(dinerId))) {
    throw new Error("잘못된 dinerId 입니다.");
  }

  const {
    data: dinerDetail,
    isLoading,
    isError,
  } = useDinerDetailQuery(
    {
      id: Number(dinerId),
    },
    {
      enabled: !!dinerId,
      suspense: false,
    }
  );

  const handleReviewButtonClick = useCallback(() => {
    push(PATH.DINER.DINER_REVIEW.stack, { dinerId });
  }, [dinerId, push]);

  const handleOpenKaKaoLink = useCallback(() => {
    window.open(dinerDetail?.kakaoLink);
  }, [dinerDetail?.kakaoLink]);

  const handleOpenKaKaoPathFindingLink = useCallback(() => {
    userAddress && dinerDetail && window.open(getPathFindingURL(userAddress, dinerDetail.address));
  }, [userAddress, dinerDetail]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError || !dinerDetail) {
    return <div>정보를 불러올 수 없습니다.</div>;
  }

  const totalReviewCount = dinerDetail.reviewPoints.reduce((acc, point) => acc + point.reviewCount, 0);

  return (
    <StackLayout appBar={{ title: "내 주변 음식점" }} isHide>
      <Header useBack />
      <S.DinerDetailWrap>
        <S.VisualWrap>
          <img
            src={dinerDetail.imageUrl === "" || !dinerDetail.imageUrl ? DEFAULT_DINER_IMAGE : dinerDetail.imageUrl}
            alt="음식점 이미지"
          />
        </S.VisualWrap>
        <S.InfoWrap>
          <S.Tit>{dinerDetail.name}</S.Tit>
          <S.TopInfo>
            <S.Info>
              <S.List>
                <Icon icon={"Addr"} size={18} />
                {dinerDetail?.address}
              </S.List>
              <S.List>
                <Icon icon={"Tel"} size={18} />
                <S.TelLink href="tel:02-1234-1234">{dinerDetail.phoneNumber}</S.TelLink>
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
            {dinerDetail.reviewPoints.map((reviewPoint) => (
              <Tag key={reviewPoint.reason} reviews={reviewPoint.reviewCount} iconType={reviewPoint.icon}>
                {reviewPoint.reason}
              </Tag>
            ))}
          </S.ReviewWrap>
        </S.InfoWrap>
        {!dinerDetail.isReviewed && (
          <S.BtnReview onClick={handleReviewButtonClick}>
            <Icon icon={"BtnReview"} size={73} />
          </S.BtnReview>
        )}
      </S.DinerDetailWrap>
    </StackLayout>
  );
};

export default DinerDetailPage;
