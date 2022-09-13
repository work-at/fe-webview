import Icon, { IconType } from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import Header from "@/components/@shared/Header";
import { PATH } from "@/constants";
import { AccommodationInfoTag, AccommodationReviewTag } from "@/domains/accommodation/accommodation.dto";
import { ACCOMMODATION_INFO_TAGS, ACCOMMODATION_REVIEW_TAGS } from "@/domains/common.constant";
import { useFlow } from "@/stack";
import { useCallback, useRef } from "react";

import * as S from "./AccommodationSearch.styled";

const AccommodationSearch = () => {
  const { push } = useFlow();
  const searchKeywordRef = useRef("");

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

  const handleReviewTagSelect = useCallback(
    (tag: AccommodationReviewTag) => {
      const selectedTag = ACCOMMODATION_REVIEW_TAGS.find((reviewTag) => reviewTag.name === tag);

      push(PATH.ACCOMMODATION.ACCOMMODATION_SEARCH_RESULT.stack, {
        reviewTag: tag,
        searchedBy: selectedTag?.content,
      });
    },
    [push]
  );

  const handleSearchKeywordChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.target;
    searchKeywordRef.current = value;
  }, []);

  const handleSearchButtonClick = useCallback(() => {
    push(PATH.ACCOMMODATION.ACCOMMODATION_SEARCH_RESULT.stack, {
      searchKeyword: searchKeywordRef.current,
      searchedBy: searchKeywordRef.current,
    });
  }, [push]);

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

        {/* <S.SearhchTit>리뷰 추천 키워드</S.SearhchTit>
        <S.ReviewList>
          {ACCOMMODATION_REVIEW_TAGS.map((tag) => (
            <S.ReviewListItem key={tag.name} onClick={() => handleReviewTagSelect(tag.name)}>
              <S.BtnReview>{tag.content}</S.BtnReview>
            </S.ReviewListItem>
          ))}
        </S.ReviewList> */}
      </S.AccommSearchWrap>
    </StackLayout>
  );
};

export default AccommodationSearch;
