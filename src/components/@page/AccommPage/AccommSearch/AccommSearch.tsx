import * as S from "./AccommSearch.styled";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";

const AccommSearch = () => {
  return (
    <>
      <Header bgColor useBack search />

      <S.AccommSearchWrap>
        <S.SearhchTit>숙소 정보 키워드</S.SearhchTit>
        <S.ScrollWrap>
          <S.ScrollInner>
            <S.InfoList>
              <S.InfoListItem>
                <S.BtnInfo>
                  <Icon icon="IconAccommInfo1" />
                </S.BtnInfo>
                <S.InfoTxt>
                  숙소 내 <br />
                  업무 공간
                </S.InfoTxt>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.BtnInfo>
                  <Icon icon="IconAccommInfo2" />
                </S.BtnInfo>
                <S.InfoTxt>숲 인근</S.InfoTxt>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.BtnInfo>
                  <Icon icon="IconAccommInfo3" />
                </S.BtnInfo>
                <S.InfoTxt>바다 인근</S.InfoTxt>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.BtnInfo>
                  <Icon icon="IconAccommInfo4" />
                </S.BtnInfo>
                <S.InfoTxt>
                  관광지
                  <br />
                  인근
                </S.InfoTxt>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.BtnInfo>
                  <Icon icon="IconAccommInfo5" />
                </S.BtnInfo>
                <S.InfoTxt>도시 인근</S.InfoTxt>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.BtnInfo>
                  <Icon icon="IconAccommInfo6" />
                </S.BtnInfo>
                <S.InfoTxt>
                  공용업무
                  <br />
                  공간
                </S.InfoTxt>
              </S.InfoListItem>
            </S.InfoList>
          </S.ScrollInner>
        </S.ScrollWrap>

        <S.SearhchTit>리뷰 추천 키워드</S.SearhchTit>
        <S.ReviewList>
          <S.ReviewListItem>
            <S.BtnReview>주차하기편해요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>뷰가좋아요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>가성비가좋아요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>침대가편해요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>방이청결해요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>와이파이빵빵해요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>책상이편해요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>조식가능해요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>콘센트많아요</S.BtnReview>
          </S.ReviewListItem>
          <S.ReviewListItem>
            <S.BtnReview>교통이좋아요</S.BtnReview>
          </S.ReviewListItem>
        </S.ReviewList>
      </S.AccommSearchWrap>

      {/* NoData */}
      <S.AccommNoData>
        <Icon icon="IconNoData" />
        <S.NoDataTxt>
          앗, 검색 결과가 없어요! <br />
          다른 키워드를 입력해보세요.
        </S.NoDataTxt>
      </S.AccommNoData>
      {/* //NoData */}
    </>
  );
};

export default AccommSearch;
