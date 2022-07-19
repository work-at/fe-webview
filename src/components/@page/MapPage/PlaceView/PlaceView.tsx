import * as S from "./PlaceView.styled";
import Tag from "@/components/@shared/Tag/Tag";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import VisualImg from "@/assets/images/BgCafe1.png";

const PlaceView = () => {
  return (
    <>
      <Header useBack />
      <S.PlaceViewWrap>
        <S.VisualWrap>
          <img src={VisualImg} alt="까페 이미지" />
        </S.VisualWrap>
        <S.InfoWrap>
          <S.Tit>
            원앤온리 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출 두줄만 노출
          </S.Tit>
          <S.TopInfo>
            <S.Info>
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
                <Icon icon={"BtnDirecion"} size={43} />
              </S.BtnMap>
              <S.BtnMap>
                <Icon icon={"BtnLocation"} size={43} />
              </S.BtnMap>
            </S.BtnMapWrap>
          </S.TopInfo>
          <S.WalkTit>
            <S.Num>153</S.Num>명의 워케이셔너가
            <br />
            리뷰를 남겼어요!
          </S.WalkTit>
          <S.ReviewWrpa>
            <Tag Reviews={200} iconType={"CommonReview2"} children={"뷰가 좋아요"} />
            <Tag Reviews={120} iconType={"CommonReview3"} children={"가성비가 좋아요"} />
            <Tag Reviews={90} iconType={"CommonReview4"} children={"사람이 많이 없어요"} />
            <Tag Reviews={42} iconType={"CommonReview5"} children={"넓고 깨끗해요"} />
          </S.ReviewWrpa>
        </S.InfoWrap>
        <S.BtnReview>
          <Icon icon={"BtnReview"} size={73} />
        </S.BtnReview>
      </S.PlaceViewWrap>
    </>
  );
};

export default PlaceView;
