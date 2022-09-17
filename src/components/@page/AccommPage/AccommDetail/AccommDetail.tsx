import * as S from "./AccommDetail.styled";
import Tag from "@/components/@shared/Tag/Tag";
import Icon from "@/assets/Icon";
import VisualImg from "@/assets/images/BgCafe1.png";

const AccommDetail = () => {
  return (
    <>
      {/* <Header useBack /> */}
      <S.AccommDetailWrap>
        <S.VisualWrap>
          <img src={VisualImg} alt="까페 이미지" />
        </S.VisualWrap>
        <S.InfoWrap>
          <S.Tit>
            그랜드워커힐서울 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출
          </S.Tit>
          <S.TopInfo>
            <S.Info>
              <S.List>
                <Icon icon={"PriceIcon"} size={18} />
                1박 평균 45,000원~
              </S.List>
              <S.List>
                <Icon icon={"Addr"} size={18} />
                제주 서귀포시 오삼15로 1층 주소가 길다 길어 길다 길어 길다 길어 길다 길어
              </S.List>
              <S.List>
                <Icon icon={"Tel"} size={18} />
                <S.TelLink href="tel:02-1234-1234">02-1234-1234</S.TelLink>
              </S.List>
            </S.Info>
            <S.BtnMapWrap>
              <S.BtnMap>
                <Icon icon={"BtnUrl"} size={43} />
              </S.BtnMap>
              <S.BtnMap>
                <Icon icon={"BtnLocation"} size={43} />
              </S.BtnMap>
            </S.BtnMapWrap>
          </S.TopInfo>

          <S.InfoTit>숙소 정보</S.InfoTit>
          <S.ScrollWrap>
            <S.ScrollInner>
              <S.InfoList>
                <S.InfoListItem>
                  <Icon icon="WORKSPACE" />
                  <S.InfoTxt>
                    숙소 내 <br />
                    업무 공간
                  </S.InfoTxt>
                </S.InfoListItem>
                <S.InfoListItem>
                  <Icon icon="NEAR_FOREST" />
                  <S.InfoTxt>숲 인근</S.InfoTxt>
                </S.InfoListItem>
                <S.InfoListItem>
                  <Icon icon="NEAR_SEA" />
                  <S.InfoTxt>바다 인근</S.InfoTxt>
                </S.InfoListItem>
                <S.InfoListItem>
                  <Icon icon="NEAR_ATTRACTION" />
                  <S.InfoTxt>
                    관광지
                    <br />
                    인근
                  </S.InfoTxt>
                </S.InfoListItem>
                <S.InfoListItem>
                  <Icon icon="NEAR_CITY" />
                  <S.InfoTxt>도시 인근</S.InfoTxt>
                </S.InfoListItem>
                <S.InfoListItem>
                  <Icon icon="SHARED_WORKSPACE" />
                  <S.InfoTxt>
                    공용업무
                    <br />
                    공간
                  </S.InfoTxt>
                </S.InfoListItem>
              </S.InfoList>
            </S.ScrollInner>
          </S.ScrollWrap>

          <S.WalkTit>
            <S.Num>153</S.Num>명의 워케이셔너가
            <br />
            리뷰를 남겼어요!
          </S.WalkTit>
          <S.ReviewWrap>
            <Tag reviews={200} iconType={"BerthReview1"}>
              침대가 편해요
            </Tag>
            <Tag reviews={120} iconType={"BerthReview2"}>
              방이 청결해요
            </Tag>
            <Tag reviews={90} iconType={"BerthReview3"}>
              와이파이가 빵빵해요
            </Tag>
            <Tag reviews={42} iconType={"BerthReview4"}>
              책상이 편해요
            </Tag>
            <Tag reviews={42} iconType={"BerthReview5"}>
              조식 먹을 수 있어요
            </Tag>
            <Tag reviews={42} iconType={"BerthReview6"}>
              교통이 좋아요
            </Tag>
            <Tag reviews={42} iconType={"BerthReview7"}>
              콘센트 자리 많아요
            </Tag>
          </S.ReviewWrap>
        </S.InfoWrap>
        <S.BtnReview>
          <Icon icon={"BtnReview"} size={73} />
        </S.BtnReview>
      </S.AccommDetailWrap>
    </>
  );
};

export default AccommDetail;
