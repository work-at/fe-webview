import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { PATH } from "@/constants";
import { useAccommodationListQuery } from "@/domains/accommodation/accommodation.api";
import { ACCOMMODATION_REGIONS } from "@/domains/accommodation/accommodation.constant";
import { AccommodationRegion } from "@/domains/accommodation/accommodation.dto";
import { AccommodationRegions_TEXT } from "@/domains/accommodation/accommodation.text";
import { Badge } from "@/pages/AccommodationPage/AccommodationPage";
import { useFlow } from "@/stack";
import { decimalFormatter } from "@/utils/stringUtil";
import { useActivityParams } from "@stackflow/react";
import * as S from "./AccommodationList.styled";

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const AccommodationList = () => {
  const { push, replace } = useFlow();
  const { region } = useActivityParams<{
    region: AccommodationRegion;
  }>();

  const {
    data: accommodationList,
    isLoading,
    isError,
  } = useAccommodationListQuery(
    {
      region: region === "ALL" ? undefined : region,
    },
    {}
  );

  const handleRegionSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;

    replace(PATH.ACCOMMODATION.ACCOMMODATION_LIST.stack, { region: value }, { animate: false });
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError || !accommodationList) {
    return <div>요류 발생</div>;
  }

  return (
    <StackLayout isHide>
      <S.AccommListWrap>
        {/* 숙소 키워드 */}
        {/* <S.KeywordTxt>바다 인근 검색결과</S.KeywordTxt> */}
        <S.RegionSelectorWrap>
          <S.RegionSelector onChange={handleRegionSelect}>
            {ACCOMMODATION_REGIONS.map((currentRegion) => (
              <option key={currentRegion} selected={currentRegion === region} value={currentRegion}>
                {AccommodationRegions_TEXT[currentRegion]}
              </option>
            ))}
          </S.RegionSelector>
        </S.RegionSelectorWrap>

        {/* TODO: api에 region 파라미터를 넘길 수 있게 수정되면 반영 */}
        <Badge />
        <S.AccommList>
          {accommodationList.map((item, index) => (
            <S.AccommListItem key={index}>
              <S.LinkDetail
                onClick={() => push(PATH.ACCOMMODATION.ACCOMMODATION_DETAIL.stack, { accommodationId: item.id })}
              >
                <S.AccommThumb>
                  <img src={item.imgUrl === "" || !item.imgUrl ? DEFAULT_IMAGE : item.imgUrl} alt="숙소 이미지" />
                </S.AccommThumb>
                <S.DetailInfo>
                  <S.AccommName>{item.name}</S.AccommName>

                  <S.AccommPriceInfo>
                    <S.ConsecutivePriceTxt>
                      <S.StandardTxt region={region}>평일 5일</S.StandardTxt>
                      <S.PriceBox>
                        <S.PriceTxt>{decimalFormatter(item.price * 5)}</S.PriceTxt>
                        <S.WonTxt>원</S.WonTxt>
                        <S.FromTxt>부터</S.FromTxt>
                      </S.PriceBox>
                    </S.ConsecutivePriceTxt>
                    <S.DayPriceTxt>1박 평균 {decimalFormatter(item.price)}원</S.DayPriceTxt>
                  </S.AccommPriceInfo>

                  <S.AccommReviewList>
                    {item.topReviewTags.map((tag, index) => (
                      <S.AccommReviewListItem key={index}>{tag.content}</S.AccommReviewListItem>
                    ))}
                  </S.AccommReviewList>
                </S.DetailInfo>
              </S.LinkDetail>
            </S.AccommListItem>
          ))}
        </S.AccommList>

        {/* 숙소 리스트 */}
      </S.AccommListWrap>
    </StackLayout>
  );
};

export default AccommodationList;
