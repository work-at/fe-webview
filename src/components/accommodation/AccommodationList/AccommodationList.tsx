import Icon from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useAccommodationListQuery } from "@/domains/accommodation/accommodation.api";
import { ACCOMMODATION_REGIONS } from "@/domains/accommodation/accommodation.constant";
import { AccommodationRegion } from "@/domains/accommodation/accommodation.dto";
import { AccommodationRegions_TEXT } from "@/domains/accommodation/accommodation.text";
import { decimalFormatter } from "@/utils/stringUtil";
import { useActivityParams } from "@stackflow/react";
import { useState } from "react";
import * as S from "./AccommodationList.styled";

const DEFAULT_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

const AccommodationList = () => {
  const { region, message, type } = useActivityParams<{
    region: AccommodationRegion;
    type: "POPULAR" | "IN_BETWEEN" | "FREE";
    message: string;
  }>();
  const [selectedRegion, setSelectedRegion] = useState<AccommodationRegion>(region);

  const {
    data: accommodationList,
    isLoading,
    isError,
  } = useAccommodationListQuery(
    {
      region: selectedRegion,
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
    <StackLayout>
      <S.AccommListWrap>
        {/* 숙소 키워드 */}
        {/* <S.KeywordTxt>바다 인근 검색결과</S.KeywordTxt> */}
        <S.RegionSelectorWrap>
          <S.RegionSelector onChange={handleRegionSelect}>
            {ACCOMMODATION_REGIONS.map((region) => (
              <option key={region} selected={region === selectedRegion} value={region}>
                {AccommodationRegions_TEXT[region]}
              </option>
            ))}
          </S.RegionSelector>
        </S.RegionSelectorWrap>

        {/* 서울 워크앳 지수 */}
        <S.WalkatDensity region={selectedRegion}>
          <S.WalkatTxt region={selectedRegion}>
            최근 {AccommodationRegions_TEXT[selectedRegion]}의 워크앳 지수는?
          </S.WalkatTxt>
          <S.StateBox>
            {/* TODO : 서버 연동하기 */}
            <Icon icon={type} />
            <S.StateTxt region={selectedRegion}>{message}</S.StateTxt>
          </S.StateBox>
        </S.WalkatDensity>
        <S.AccommList>
          {accommodationList.map((item, index) => (
            <S.AccommListItem key={index}>
              <S.LinkDetail>
                <S.AccommThumb>
                  <img src={item.imgUrl === "" || !item.imgUrl ? DEFAULT_IMAGE : item.imgUrl} alt="숙소 이미지" />
                </S.AccommThumb>
                <S.DetailInfo>
                  <S.AccommName>{item.name}</S.AccommName>

                  <S.AccommPriceInfo>
                    <S.ConsecutivePriceTxt>
                      <S.StandardTxt region={selectedRegion}>평일 5일</S.StandardTxt>
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
