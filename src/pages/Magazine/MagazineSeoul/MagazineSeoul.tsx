import * as S from "../Magazine.styled";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import MagazineVisualSeoul from "@/assets/images/MagazineVisualSeoul.png";
import MagazinePlaceSeoulLogo from "@/assets/images/MagazinePlaceSeoulLogo.png";
import MagazinePlaceSeoul1 from "@/assets/images/MagazinePlaceSeoul1.png";
import MagazinePlaceSeoul2 from "@/assets/images/MagazinePlaceSeoul2.png";
import MagazinePlaceSeoul3 from "@/assets/images/MagazinePlaceSeoul3.png";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { PATH } from "@/constants";
import { useFlow } from "@/stack";

const MagazineSeoul = () => {
  const { push } = useFlow();

  return (
    <StackLayout isHide>
      <Header useBack MagazinLogo="seoul" />
      <S.MagazineWrap>
        <S.VisualWrap>
          <img src={MagazineVisualSeoul} alt="서울 이미지" />
        </S.VisualWrap>

        <S.BottomWrap>
          <S.MagazineTxt>
            매일 더운 집에서 재택근무하느라 힘드셨죠? <br />
            워크앳과 함께 시원하고 예쁜 곳에서 워케이션 함께해요!
          </S.MagazineTxt>
          <S.SeoulFlag>서울</S.SeoulFlag>
          <S.MagazineTit>서울 워케이션 장소 추천</S.MagazineTit>
          <S.PlaceLogo>
            <img src={MagazinePlaceSeoulLogo} alt="포시즌스 호텔 서울 로고" />
          </S.PlaceLogo>
          <S.PlaceName>포시즌스 호텔 서울</S.PlaceName>
          <S.PlaceAddr>
            <Icon icon={"Addr"} size={18} />
            서울 종로구 새문안로 97
          </S.PlaceAddr>
          <S.PlaceImg>
            <img src={MagazinePlaceSeoul1} alt="포시즌스 호텔 서울 이미지" />
          </S.PlaceImg>
          <S.PlaceImg>
            <img src={MagazinePlaceSeoul2} alt="포시즌스 호텔 서울 이미지" />
          </S.PlaceImg>
          <S.PlaceTxt>편안한 호텔 오피스</S.PlaceTxt>
          <S.MagazineTxt>
            포시즌스 호텔 서울은 광화문 사거리에 위치해 경복궁과 덕수궁과 근접해 있어 산책코스로도 인기가 좋습니다.
            <br />
            <br />
            또한 30박 이상 연박 시 롱 스테이 베네핏 (Long Stay Benefits)혜택을 드리고 있습니다. (객실 요금 할인을 비롯해
            호텔 내 식음업장 및 룸서비스 20% 할인, 평일 스파 20% 할인, 세탁 및 드라이클리닝 서비스 30% 할인, 주차 및
            발렛파킹 무료 제공)
          </S.MagazineTxt>
          <S.PlaceImg>
            <img src={MagazinePlaceSeoul3} alt="포시즌스 호텔 서울 이미지" />
          </S.PlaceImg>
          <S.MagazineTxt>
            장마와 무더위가 기승인 8월, <br />
            요번 달은 집처럼 편안한 휴식과 럭셔리한 호캉스의 만족감, 그리고 업무의 편의성까지 갖춘 포시즌스 호텔에서
            워케이션 어떠세요?
          </S.MagazineTxt>

          <S.BtnListGo
            onClick={() =>
              push(PATH.ACCOMMODATION.ACCOMMODATION_LIST.stack, {
                region: "SEOUL",
              })
            }
          >
            <Icon icon="IconSeoul" />
            <S.GoSeoulTxt>지금 바로 서울로 워케이션 떠나기!</S.GoSeoulTxt>
          </S.BtnListGo>
        </S.BottomWrap>
      </S.MagazineWrap>
    </StackLayout>
  );
};

export default MagazineSeoul;
