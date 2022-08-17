import * as S from "./AccommMain.styled";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import MainVisualJeju from "@/assets/images/MainVisualJeju.png";
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

export type AccommListItem = {
  imageUrl: string;
  area: "seoul" | "jeju" | "gangWon";
  name: string;
};

export type AccommProps = {
  items: AccommListItem[];
  area: "seoul" | "jeju" | "gangneung" | "sokcho";
};

const AccommMain = ({ items }: AccommProps) => {
  return (
    <>
      <Header main />
      <S.AccommMainWrap>
        <S.VisualWrap>
          <img src={MainVisualJeju} alt="제주 이미지" />
          <S.VisualTxtBox>
            <S.AccommJejuFlag>제주도</S.AccommJejuFlag>
            {/* <S.AccommSeoulFlag>서울</S.AccommSeoulFlag>
            <S.AccommGangWonFlag>강원도</S.AccommGangWonFlag>
            <S.AccommEventFlag>이벤트</S.AccommEventFlag> */}
            <S.VisualTxt>
              제주도의 향긋함을
              <br />
              느끼며 서귀포에서
            </S.VisualTxt>
          </S.VisualTxtBox>
        </S.VisualWrap>

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

          <S.WalkatDensity area="seoul">
            <S.WalkatTxt area="seoul">최근 서울의 워크앳 지수는?</S.WalkatTxt>
            <S.StateBox>
              {/* IconDensityStpe1 : 한산해요 / IconDensityStpe2 : 핫플직전 / IconDensityStpe3 : 완전핫함  */}
              <Icon icon="IconDensityStpe1" />
              <S.StateTxt area="seoul">한산해요</S.StateTxt>
            </S.StateBox>
          </S.WalkatDensity>

          <S.WalkatDensity area="jeju">
            <S.WalkatTxt area="jeju">최근 제주의 워크앳 지수는?</S.WalkatTxt>
            <S.StateBox>
              {/* IconDensityStpe1 : 한산해요 / IconDensityStpe2 : 핫플직전 / IconDensityStpe3 : 완전핫함  */}
              <Icon icon="IconDensityStpe2" />
              <S.StateTxt area="jeju">핫플직전</S.StateTxt>
            </S.StateBox>
          </S.WalkatDensity>

          <S.WalkatDensity area="gangneung">
            <S.WalkatTxt area="gangneung" t>
              최근 강릉의 워크앳 지수는?
            </S.WalkatTxt>
            <S.StateBox>
              {/* IconDensityStpe1 : 한산해요 / IconDensityStpe2 : 핫플직전 / IconDensityStpe3 : 완전핫함  */}
              <Icon icon="IconDensityStpe3" />
              <S.StateTxt area="gangneung">완전핫함</S.StateTxt>
            </S.StateBox>
          </S.WalkatDensity>

          <S.WalkatDensity area="sokcho">
            <S.WalkatTxt area="sokcho">최근 속초의 워크앳 지수는?</S.WalkatTxt>
            <S.StateBox>
              {/* IconDensityStpe1 : 한산해요 / IconDensityStpe2 : 핫플직전 / IconDensityStpe3 : 완전핫함  */}
              <Icon icon="IconDensityStpe3" />
              <S.StateTxt area="sokcho">완전핫함</S.StateTxt>
            </S.StateBox>
          </S.WalkatDensity>

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
                        {item.area === "jeju" && <S.AccommJejuFlag>제주</S.AccommJejuFlag>}
                        {item.area === "gangWon" && <S.AccommGangWonFlag>강원</S.AccommGangWonFlag>}
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
    </>
  );
};

export default AccommMain;
