import Icon from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { PATH } from "@/constants";
import { useAccommodationListQuery } from "@/domains/accommodation/accommodation.api";
import { ACCOMMODATION_REGIONS } from "@/domains/accommodation/accommodation.constant";
import {
  AccommodationInfoTag,
  AccommodationRegion,
  AccommodationReviewTag,
} from "@/domains/accommodation/accommodation.dto";
import { AccommodationRegions_TEXT } from "@/domains/accommodation/accommodation.text";
import { useFlow } from "@/stack";
import { decimalFormatter } from "@/utils/stringUtil";
import { useActivityParams } from "@stackflow/react";
import { useState } from "react";
import * as S from "./AccommodationSearchResult.styled";

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const AccommodationSearchResult = () => {
  const { push } = useFlow();
  const { infoTag, reviewTag, searchKeyword, searchedBy } = useActivityParams<{
    infoTag: AccommodationInfoTag;
    reviewTag: AccommodationReviewTag;
    searchKeyword: string;
    searchedBy: string;
  }>();

  const [selectedRegion, setSelectedRegion] = useState<AccommodationRegion>();

  const {
    data: accommodationList,
    isLoading,
    isError,
  } = useAccommodationListQuery(
    {
      region: selectedRegion === "ALL" ? undefined : selectedRegion,
      infoTag,
      topReviewTag: reviewTag,
    },
    {}
  );

  const handleRegionSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;

    setSelectedRegion(value as AccommodationRegion);
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
        <S.RegionSelectorWrap>
          <S.RegionSelector onChange={handleRegionSelect}>
            {ACCOMMODATION_REGIONS.map((region) => (
              <option key={region} selected={region === selectedRegion} value={region}>
                {AccommodationRegions_TEXT[region]}
              </option>
            ))}
          </S.RegionSelector>
        </S.RegionSelectorWrap>
        <S.KeywordTxt>{searchedBy} 검색결과</S.KeywordTxt>
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
                      <S.StandardTxt region={selectedRegion ?? "ALL"}>평일 5일</S.StandardTxt>
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
          {accommodationList.length === 0 && (
            <S.AccommNoData>
              <Icon icon="IconNoData" />
              <S.NoDataTxt>
                앗, 검색 결과가 없어요! <br />
                다른 키워드를 입력해보세요.
              </S.NoDataTxt>
            </S.AccommNoData>
          )}
        </S.AccommList>

        {/* 숙소 리스트 */}
      </S.AccommListWrap>
    </StackLayout>
  );
};

export default AccommodationSearchResult;
