import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import * as S from "./AccommodationPage.styled";
import Icon from "@/assets/Icon";
import MainVisualJeju from "@/assets/images/MainVisualJeju.png";
import MainVisualSeoul from "@/assets/images/MainVisualSeoul.png";
import MainVisualGangwon from "@/assets/images/MainVisualGangwon.png";
import MainVisualEvent1 from "@/assets/images/MainVisualEvent1.png";
import MainVisualEvent2 from "@/assets/images/MainVisualEvent2.png";
import AreaAllImg from "@/assets/images/btn-search-all.png";
import AreaSeoulImg from "@/assets/images/btn-search-seoul.png";
import AreaJejuImg from "@/assets/images/btn-search-jeju.png";
import AreaGangneungImg from "@/assets/images/btn-search-gangneung.png";
import AreaSokchoImg from "@/assets/images/btn-search-sokcho.png";
import SpaceImg1 from "@/assets/images/BgWorkSpace1.png";
import SpaceImg2 from "@/assets/images/BgWorkSpace2.png";
import SpaceImg3 from "@/assets/images/BgWorkSpace3.png";
import SpaceImg4 from "@/assets/images/BgWorkSpace4.png";
import SpaceImg5 from "@/assets/images/BgWorkSpace5.png";
import AccommImg from "@/assets/images/@dummy/@accomm-list.png";
import { useScrollDrag } from "@/hooks";
import { Dot, DotActive } from "@/assets/svg";
import { useRegionTrafficQuery } from "@/domains/accomodation/accomodation.api";
import { useMemo } from "react";

const Badge = () => {
  const { data } = useRegionTrafficQuery();

  const region = useMemo(() => data?.data.region, [data]);
  const type = useMemo(() => data?.data.type, [data]);
  const message = useMemo(() => data?.data.message, [data]);

  if (region === "JEJU") {
    return (
      <S.WalkatDensity area="제주">
        <S.WalkatTxt area="jeju">최근 제주의 워크앳 지수는?</S.WalkatTxt>
        <S.StateBox>
          {type && <Icon icon={type} />}
          {message && <S.StateTxt area="jeju">{message}</S.StateTxt>}
        </S.StateBox>
      </S.WalkatDensity>
    );
  }

  if (region === "SEOUL") {
    return (
      <S.WalkatDensity area="서울">
        <S.WalkatTxt area="seoul">최근 서울의 워크앳 지수는?</S.WalkatTxt>
        <S.StateBox>
          {type && <Icon icon={type} />}
          {message && <S.StateTxt area="seoul">{message}</S.StateTxt>}
        </S.StateBox>
      </S.WalkatDensity>
    );
  }

  if (region === "GANGNEUNG") {
    return (
      <S.WalkatDensity area="강릉">
        <S.WalkatTxt area="gangneung">최근 강릉의 워크앳 지수는?</S.WalkatTxt>
        <S.StateBox>
          {type && <Icon icon={type} />}
          {message && <S.StateTxt area="gangneung">{message}</S.StateTxt>}
        </S.StateBox>
      </S.WalkatDensity>
    );
  }

  if (region === "SOKCHO") {
    return (
      <S.WalkatDensity area="속초">
        <S.WalkatTxt area="sokcho">최근 속초의 워크앳 지수는?</S.WalkatTxt>
        <S.StateBox>
          {type && <Icon icon={type} />}
          {message && <S.StateTxt area="sokcho">{message}</S.StateTxt>}
        </S.StateBox>
      </S.WalkatDensity>
    );
  }

  return null;
};

const AccommodationPage = () => {
  const { events, ref, currentIndex } = useScrollDrag();

  const items = [
    {
      imageUrl: AccommImg,
      area: "seoul",
      name: "질그랭이센터 두줄 테스트 숙소 이름 두줄 테스트입니다 두줄 테스트",
    },
    {
      imageUrl: AccommImg,
      area: "jeju",
      name: "질그랭이센터",
    },
    {
      imageUrl: AccommImg,
      area: "gangWon",
      name: "질그랭이센터",
    },
  ];

  const item2 = [
    {
      src: MainVisualJeju,
      location: "제주도",
      text1: "제주도의 향긋함을",
      text2: "느끼며 서귀포에서",
      textBox: <S.AccommJejuFlag>제주</S.AccommJejuFlag>,
    },
    {
      src: MainVisualSeoul,
      location: "서울",
      text1: "서울의 바람을",
      text2: "즐기며 한남동에서",
      textBox: <S.AccommSeoulFlag>서울</S.AccommSeoulFlag>,
    },
    {
      src: MainVisualGangwon,
      location: "강원도",
      text1: "강원도의 맑은 공기를",
      text2: "마시며 강릉에서",
      textBox: <S.AccommGangWonFlag>강원도</S.AccommGangWonFlag>,
    },
    {
      src: MainVisualEvent1,
      location: "이벤트",
      text1: "이지태스크",
      text2: "8월 제주도 워케이션 모집!",
      textBox: <S.AccommEventFlag>이벤트</S.AccommEventFlag>,
    },
    {
      src: MainVisualEvent2,
      location: "이벤트",
      text1: "WORK ON THE BEACH",
      text2: "데스커 양양 워케이션",
      textBox: <S.AccommEventFlag>이벤트</S.AccommEventFlag>,
    },
  ];

  return (
    <StackLayout navigationPath="accommodation" isHide>
      <S.AccommMainWrap>
        <S.VisualWrapContainer>
          <S.VisualWrapList onMouseDown={events.onMouseDown} onMouseMove={events.onMouseMove} ref={ref}>
            {item2.map((each) => (
              <S.VisualWrap key={each.text1}>
                <img src={each.src} alt={each.location} />
              </S.VisualWrap>
            ))}
          </S.VisualWrapList>
          <S.VisualTxtBox>
            {item2[currentIndex].textBox}
            <S.VisualTxt>
              {item2[currentIndex].text1}
              <br />
              {item2[currentIndex].text2}
            </S.VisualTxt>
          </S.VisualTxtBox>
          <S.VisualDotBox>
            {item2.map((_, index) => (currentIndex === index ? <DotActive key={_.text1} /> : <Dot key={_.text1} />))}
          </S.VisualDotBox>
        </S.VisualWrapContainer>
        <S.BottomWrap>
          <S.BottomTit>지역선택</S.BottomTit>
          <S.ScrollWrap>
            <S.ScrollInner>
              <S.AreaList>
                <S.AreaListItem>
                  <S.BtnArea>
                    <S.AreaThumb>
                      <img src={AreaAllImg} alt="전체 이미지" />
                    </S.AreaThumb>
                    <S.AreaTxt>전체</S.AreaTxt>
                  </S.BtnArea>
                </S.AreaListItem>
                <S.AreaListItem>
                  <S.BtnArea>
                    <S.AreaThumb>
                      <img src={AreaSeoulImg} alt="서울 이미지" />
                    </S.AreaThumb>
                    <S.AreaTxt>서울</S.AreaTxt>
                  </S.BtnArea>
                </S.AreaListItem>
                <S.AreaListItem>
                  <S.BtnArea>
                    <S.AreaThumb>
                      <img src={AreaJejuImg} alt="제주 이미지" />
                    </S.AreaThumb>
                    <S.AreaTxt>제주</S.AreaTxt>
                  </S.BtnArea>
                </S.AreaListItem>
                <S.AreaListItem>
                  <S.BtnArea>
                    <S.AreaThumb>
                      <img src={AreaGangneungImg} alt="강릉 이미지" />
                    </S.AreaThumb>
                    <S.AreaTxt>강릉</S.AreaTxt>
                  </S.BtnArea>
                </S.AreaListItem>
                <S.AreaListItem>
                  <S.BtnArea>
                    <S.AreaThumb>
                      <img src={AreaSokchoImg} alt="속초 이미지" />
                    </S.AreaThumb>
                    <S.AreaTxt>속초</S.AreaTxt>
                  </S.BtnArea>
                </S.AreaListItem>
              </S.AreaList>
            </S.ScrollInner>
          </S.ScrollWrap>
          <Badge />
          <S.BottomTit>아직 숙소를 정하지 못 했다면</S.BottomTit>
          <S.ScrollWrap>
            <S.ScrollInner>
              <S.AccommList>
                {items.map((item, index) => (
                  <S.AccommListItem key={index}>
                    <S.LinkDetail>
                      <img src={item.imageUrl} alt="숙소 이미지" />
                      <S.Accomminfo>
                        {item.area === "seoul" && <S.AccommSeoulFlag>서울</S.AccommSeoulFlag>}
                        {item.area === "jeju" && <S.AccommJejuFlag>제주도</S.AccommJejuFlag>}
                        {item.area === "gangWon" && <S.AccommGangWonFlag>강원도</S.AccommGangWonFlag>}
                        <S.AccommName>{item.name}</S.AccommName>
                      </S.Accomminfo>
                    </S.LinkDetail>
                  </S.AccommListItem>
                ))}
              </S.AccommList>
            </S.ScrollInner>
          </S.ScrollWrap>
          <S.BottomTit>당신이 그리던 그 작업 공간</S.BottomTit>
          <S.ScrollWrap>
            <S.ScrollInner>
              <S.SpaceList>
                <S.SpaceListItem>
                  <S.LinkDetail>
                    <img src={SpaceImg1} alt="바다 인근 이미지" />
                    <S.SpaceTxt>
                      바다를 보며
                      <br />
                      싱그럽게
                    </S.SpaceTxt>
                  </S.LinkDetail>
                </S.SpaceListItem>
                <S.SpaceListItem>
                  <S.LinkDetail>
                    <img src={SpaceImg2} alt="숲 인근 이미지" />
                    <S.SpaceTxt>
                      산을 보며
                      <br />
                      경쾌하게
                    </S.SpaceTxt>
                  </S.LinkDetail>
                </S.SpaceListItem>
                <S.SpaceListItem>
                  <S.LinkDetail>
                    <img src={SpaceImg3} alt="도시 인근 이미지" />
                    <S.SpaceTxt>
                      도심에서
                      <br />
                      편하게
                    </S.SpaceTxt>
                  </S.LinkDetail>
                </S.SpaceListItem>
                <S.SpaceListItem>
                  <S.LinkDetail>
                    <img src={SpaceImg4} alt="숙소내 업무공간 이미지" />
                    <S.SpaceTxt>
                      공용 업무
                      <br />
                      공간에서
                    </S.SpaceTxt>
                  </S.LinkDetail>
                </S.SpaceListItem>
                <S.SpaceListItem>
                  <S.LinkDetail>
                    <img src={SpaceImg5} alt="관광지 인근 이미지" />
                    <S.SpaceTxt>
                      관광지에서
                      <br />
                      설레게
                    </S.SpaceTxt>
                  </S.LinkDetail>
                </S.SpaceListItem>
              </S.SpaceList>
            </S.ScrollInner>
          </S.ScrollWrap>
          <S.ReadyBox>
            <Icon icon="IconReady" />
            <S.ReadyTxt>
              다른 지역 서비스는 준비중에 있습니다. <br />
              기대해 주세요!
            </S.ReadyTxt>
          </S.ReadyBox>
        </S.BottomWrap>
      </S.AccommMainWrap>
    </StackLayout>
  );
};

export default AccommodationPage;
