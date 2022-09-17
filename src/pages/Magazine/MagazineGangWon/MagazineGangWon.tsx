import * as S from "../Magazine.styled";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import MagazineVisualGangWon from "@/assets/images/MagazineVisualGangWon.png";
import MagazinePlaceGangWonLogo from "@/assets/images/MagazinePlaceGangWonLogo.png";
import MagazinePlaceGangWon1 from "@/assets/images/MagazinePlaceGangWon1.png";
import MagazinePlaceGangWon2 from "@/assets/images/MagazinePlaceGangWon2.png";
import MagazinePlaceGangWon3 from "@/assets/images/MagazinePlaceGangWon3.png";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useFlow } from "@/stack";
import { PATH } from "@/constants";
import { useMemo } from "react";

const MagazineGangWon = () => {
  const { replace } = useFlow();

  const region = useMemo(
    () =>
      [
        { key: "GANGNEUNG", name: "강릉으로" },
        { key: "SOKCHO", name: "속초로" },
      ][Math.floor(Math.random() * 2)],
    []
  );

  return (
    <StackLayout isHide>
      <Header useBack MagazinLogo="gangWon" />
      <S.MagazineWrap>
        <S.VisualWrap>
          <img src={MagazineVisualGangWon} alt="강원 이미지" />
        </S.VisualWrap>

        <S.BottomWrap>
          <S.MagazineTxt>
            오늘은 해변으로 퇴근한다! <br />
            열심히 일한 후 강원도에서 할 수 있는 액티비티를 추천드릴게요.
          </S.MagazineTxt>
          <S.GangWonFlag>강원</S.GangWonFlag>
          <S.MagazineTit>퇴근 후 액티비티 추천</S.MagazineTit>
          <S.PlaceLogo>
            <img src={MagazinePlaceGangWonLogo} alt="젯시티 로고" />
          </S.PlaceLogo>
          <S.PlaceName>젯시티</S.PlaceName>
          <S.PlaceAddr>
            <Icon icon={"Addr"} size={18} />
            강원도 양양군 손양면 동호리 1-113
          </S.PlaceAddr>
          <S.PlaceImg>
            <img src={MagazinePlaceGangWon1} alt="젯시티 이미지" />
          </S.PlaceImg>
          <S.PlaceImg>
            <img src={MagazinePlaceGangWon2} alt="젯시티 이미지" />
          </S.PlaceImg>
          <S.PlaceTxt>쾌적한 오픈 오피스</S.PlaceTxt>
          <S.MagazineTxt>
            젯시티는 국제서핑협회(ISA) 공인 서핑스쿨이자 서핑 종합 문화공간으로 서핑강습, 게스트하우스, 펜션, 바비큐,
            치킨&amp;호프 등을 한 곳에서 즐기실 수 있습니다.
            <br />
            <br />
            또한 서핑존 바로 앞 해변에 샤워장 및 탈의/렌탈시설을 설치하여 5초이내로 입수가 가능합니다.
          </S.MagazineTxt>
          <S.PlaceImg>
            <img src={MagazinePlaceGangWon3} alt="젯시티 이미지" />
          </S.PlaceImg>
          <S.MagazineTxt>
            퇴근 후 서핑체험 즐기시고
            <br />
            바베큐파티 함께 어떠신가요?
            <br />
            <br />
            워크챗을 통해 직무 고민 뿐만 아니라 퇴근 후 여가 활동도 함께 즐기실 수 있어요!
          </S.MagazineTxt>

          <S.BtnListGo
            onClick={() =>
              replace(PATH.ACCOMMODATION.ACCOMMODATION_LIST.stack, {
                region: region.key,
              })
            }
          >
            <Icon icon="IconGangWon" />
            <S.GoGangWonTxt>지금 바로 {region.name} 워케이션 떠나기!</S.GoGangWonTxt>
          </S.BtnListGo>
        </S.BottomWrap>
      </S.MagazineWrap>
    </StackLayout>
  );
};

export default MagazineGangWon;
