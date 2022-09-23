import Icon, { IconType } from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Header from "@/components/@shared/Header";
import { PATH } from "@/constants";
import {
  useAccommodationListByNameQuery,
  useAccommodationReviewListQuery,
} from "@/domains/accommodation/accommodation.api";
import { AccommodationInfoTag, AccommodationReviewTag } from "@/domains/accommodation/accommodation.dto";
import { ACCOMMODATION_INFO_TAGS } from "@/domains/common.constant";
import { useFlow } from "@/stack";
import { useCallback, useEffect, useRef, useState } from "react";

import * as S from "./AccommodationSearch.styled";

const AccommodationSearch = () => {
  const { push } = useFlow();
  const searchKeywordRef = useRef("");
  const { data: accommodationReviewData } = useAccommodationReviewListQuery();

  const handleInfoTagSelect = useCallback(
    (tag: AccommodationInfoTag) => {
      const selectedTag = ACCOMMODATION_INFO_TAGS.find((infoTag) => infoTag.name === tag);

      push(PATH.ACCOMMODATION.ACCOMMODATION_SEARCH_RESULT.stack, {
        infoTag: tag,
        searchedBy: selectedTag?.content,
      });
    },
    [push]
  );

  const [isTrigger, setIsTrigger] = useState(false);
  const [isNoData, setIsNoData] = useState(false);

  const { data } = useAccommodationListByNameQuery(
    {
      accommodationName: searchKeywordRef.current,
    },
    {
      enabled: isTrigger,
    }
  );

  useEffect(() => {
    if (isTrigger && data && data?.length > 0) {
      push(PATH.ACCOMMODATION.ACCOMMODATION_SEARCH_RESULT.stack, {
        searchKeyword: searchKeywordRef.current,
        searchedBy: searchKeywordRef.current,
      });
    }

    if (data && data.length === 0) {
      setIsNoData(true);
    }

    setIsTrigger(false);
  }, [data, isTrigger, push]);

  const handleReviewTagSelect = useCallback(
    (tag: AccommodationReviewTag) => {
      const selectedTag = accommodationReviewData?.data.tags.find((reviewTag) => reviewTag.name === tag);

      push(PATH.ACCOMMODATION.ACCOMMODATION_SEARCH_RESULT.stack, {
        reviewTag: tag,
        searchedBy: selectedTag?.content,
      });
    },
    [accommodationReviewData?.data.tags, push]
  );

  const handleSearchKeywordChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setIsNoData(false);
    const { value } = event.target;
    searchKeywordRef.current = value;
  }, []);

  const handleSearchButtonClick = useCallback(() => {
    setIsTrigger(true);
  }, []);

  return (
    <StackLayout isHide>
      <S.AccommSearchWrap>
        <Header
          bgColor
          useBack
          search
          onSearchKeywordChange={handleSearchKeywordChange}
          onSearchButtonClick={handleSearchButtonClick}
        />
        {!isNoData ? (
          <>
            <S.SearhchTit>숙소 정보 키워드</S.SearhchTit>
            <S.ScrollWrap>
              <S.ScrollInner>
                <S.InfoList>
                  {ACCOMMODATION_INFO_TAGS.map((tag) => (
                    <S.InfoListItem key={tag.name} onClick={() => handleInfoTagSelect(tag.name)}>
                      <S.BtnInfo>
                        <Icon icon={tag.icon as IconType} />
                      </S.BtnInfo>
                      <S.InfoTxt>{tag.content}</S.InfoTxt>
                    </S.InfoListItem>
                  ))}
                </S.InfoList>
              </S.ScrollInner>
            </S.ScrollWrap>
          </>
        ) : (
          <S.AccommNoDataWrap>
            <S.AccommNoData>
              <Icon icon="IconNoData" />
              <S.NoDataTxt>
                앗, 검색 결과가 없어요! <br />
                다른 키워드를 입력해보세요.
              </S.NoDataTxt>
            </S.AccommNoData>
          </S.AccommNoDataWrap>
        )}
        <S.SearhchTit>리뷰 추천 키워드</S.SearhchTit>
        <S.ReviewList>
          {accommodationReviewData?.data.tags.map((tag) => (
            <S.ReviewListItem key={tag.name} onClick={() => handleReviewTagSelect(tag.name)}>
              <S.BtnReview>{tag.content3}</S.BtnReview>
            </S.ReviewListItem>
          ))}
        </S.ReviewList>
      </S.AccommSearchWrap>
    </StackLayout>
  );
};

export default AccommodationSearch;
