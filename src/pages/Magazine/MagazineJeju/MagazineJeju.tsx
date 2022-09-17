import * as S from "../Magazine.styled";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import MagazineVisualJeju from "@/assets/images/MagazineVisualJeju.png";
import MagazinePlaceJejuLogo from "@/assets/images/MagazinePlaceJejuLogo.png";
import MagazinePlaceJeju1 from "@/assets/images/MagazinePlaceJeju1.png";
import MagazinePlaceJeju2 from "@/assets/images/MagazinePlaceJeju2.png";
import MagazinePlaceJeju3 from "@/assets/images/MagazinePlaceJeju3.png";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useFlow } from "@/stack";
import { PATH } from "@/constants";

const MagazineJeju = () => {
  const { replace } = useFlow();

  return (
    <StackLayout isHide>
      <Header useBack MagazinLogo="jeju" />
      <S.MagazineWrap>
        <S.VisualWrap>
          <img src={MagazineVisualJeju} alt="제주 이미지" />
        </S.VisualWrap>

        <S.BottomWrap>
          <S.MagazineTxt>
            8월의 제주도는 워케이션가기 좋은 곳 입니다. <br />
            여름의 제주를 잘 느낄 수 있는 장소와 활동을 추천드릴게요!
          </S.MagazineTxt>
          <S.JejuFlag>제주도</S.JejuFlag>
          <S.MagazineTit>제주 워케이션 장소 추천</S.MagazineTit>
          <S.PlaceLogo>
            <img src={MagazinePlaceJejuLogo} alt="오-피스 제주 로고" />
          </S.PlaceLogo>
          <S.PlaceName>오-피스 제주</S.PlaceName>
          <S.PlaceAddr>
            <Icon icon={"Addr"} size={18} />
            제주시 조천읍 조천2길 25 1층
          </S.PlaceAddr>
          <S.PlaceImg>
            <img src={MagazinePlaceJeju1} alt="오-피스 제주 이미지" />
          </S.PlaceImg>
          <S.PlaceImg>
            <img src={MagazinePlaceJeju2} alt="오-피스 제주 이미지" />
          </S.PlaceImg>
          <S.PlaceTxt>쾌적한 오픈 오피스</S.PlaceTxt>
          <S.MagazineTxt>
            오-피스 제주는
            <br />
            국내유일 휴양지 기반 코워킹스페이스 입니다.
            <br />
            <br />
            자유석 22개석으로 화상회의가 가능한 회의실, 복합기, 듀얼모니터 등이 구비되어 있습니다.
          </S.MagazineTxt>
          <S.PlaceImg>
            <img src={MagazinePlaceJeju3} alt="오-피스 제주 이미지" />
          </S.PlaceImg>
          <S.MagazineTxt>
            이렇게 오-피스 제주는 워케이션에 필요한 완벽한 근무조건은 다 갖춰져 있습니다! <br />
            <br />
            지금 바로! 노트북만 들고 제주도로 오세요~!
          </S.MagazineTxt>

          <S.BtnListGo
            onClick={() =>
              replace(PATH.ACCOMMODATION.ACCOMMODATION_LIST.stack, {
                region: "JEJU",
              })
            }
          >
            <Icon icon="IconJeju" />
            <S.GoJejuTxt>지금 바로 제주도로 워케이션 떠나기!</S.GoJejuTxt>
          </S.BtnListGo>
        </S.BottomWrap>
      </S.MagazineWrap>
    </StackLayout>
  );
};

export default MagazineJeju;
