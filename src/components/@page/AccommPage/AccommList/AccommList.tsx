import * as S from "./AccommList.styled";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";

export type AccommListItem = {
  imageUrl: string;
  area: "all" | "seoul" | "jeju" | "gangneung" | "sokcho";
  name: string;
  consecutivePrice: string;
  dayPrice: string;
  tags: string[];
};

export type AccommListProps = {
  items: AccommListItem[];
  area: "seoul" | "jeju" | "gangneung" | "sokcho";
};

const AccommList = ({ items }: AccommListProps) => {
  return (
    <>
      <Header bgColor useBack accommArea />
      <S.AccommListWrap>
        {/* 숙소 키워드 */}
        <S.KeywordTxt>바다 인근 검색결과</S.KeywordTxt>

        {/* 서울 워크앳 지수 */}
        <S.WalkatDensity area="seoul">
          <S.WalkatTxt area="seoul">최근 서울의 워크앳 지수는?</S.WalkatTxt>
          <S.StateBox>
            {/* FREE : 한산해요 / IN_BETWEEN : 핫플직전 / POPULAR : 완전핫함  */}
            <Icon icon="FREE" />
            <S.StateTxt area="seoul">한산해요</S.StateTxt>
          </S.StateBox>
        </S.WalkatDensity>

        {/* 제주 워크앳 지수 */}
        <S.WalkatDensity area="jeju">
          <S.WalkatTxt area="jeju">최근 제주의 워크앳 지수는?</S.WalkatTxt>
          <S.StateBox>
            {/* FREE : 한산해요 / IN_BETWEEN : 핫플직전 / POPULAR : 완전핫함  */}
            <Icon icon="IN_BETWEEN" />
            <S.StateTxt area="jeju">핫플직전</S.StateTxt>
          </S.StateBox>
        </S.WalkatDensity>

        {/* 강릉 워크앳 지수 */}
        <S.WalkatDensity area="gangneung">
          <S.WalkatTxt area="gangneung">최근 강릉의 워크앳 지수는?</S.WalkatTxt>
          <S.StateBox>
            {/* FREE : 한산해요 / IN_BETWEEN : 핫플직전 / POPULAR : 완전핫함  */}
            <Icon icon="POPULAR" />
            <S.StateTxt area="gangneung">완전핫함</S.StateTxt>
          </S.StateBox>
        </S.WalkatDensity>

        {/* 속초 워크앳 지수 */}
        <S.WalkatDensity area="sokcho">
          <S.WalkatTxt area="sokcho">최근 속초의 워크앳 지수는?</S.WalkatTxt>
          <S.StateBox>
            {/* FREE : 한산해요 / IN_BETWEEN : 핫플직전 / POPULAR : 완전핫함  */}
            <Icon icon="POPULAR" />
            <S.StateTxt area="sokcho">완전핫함</S.StateTxt>
          </S.StateBox>
        </S.WalkatDensity>

        {/* 숙소 리스트 */}
        <S.AccommList>
          {items.map((item, index) => (
            <S.AccommListItem key={index}>
              <S.LinkDetail>
                <S.AccommThumb>
                  <img src={item.imageUrl} alt="숙소 이미지" />
                </S.AccommThumb>
                <S.DetailInfo>
                  <S.AccommName>{item.name}</S.AccommName>

                  <S.AccommPriceInfo>
                    <S.ConsecutivePriceTxt>
                      <S.StandardTxt area={item.area}>평일 5일</S.StandardTxt>
                      <S.PriceBox>
                        <S.PriceTxt>{item.consecutivePrice}</S.PriceTxt>
                        <S.WonTxt>원</S.WonTxt>
                        <S.FromTxt>부터</S.FromTxt>
                      </S.PriceBox>
                    </S.ConsecutivePriceTxt>
                    <S.DayPriceTxt>1박 평균 {item.dayPrice}원</S.DayPriceTxt>
                  </S.AccommPriceInfo>

                  <S.AccommReviewList>
                    {item.tags.map((tag, index) => (
                      <S.AccommReviewListItem key={index}>{tag}</S.AccommReviewListItem>
                    ))}
                  </S.AccommReviewList>
                </S.DetailInfo>
              </S.LinkDetail>
            </S.AccommListItem>
          ))}
        </S.AccommList>
        {/* //숙소 리스트 */}
      </S.AccommListWrap>
    </>
  );
};

export default AccommList;
