import Button from "@/components/@shared/Button/Button";
import Header from "@/components/@shared/Header/Header";
import CheckBox from "@/components/@shared/CheckBox/CheckBox";
import * as S from "./ReviewWrite.styled";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";

const ReviewWrite = () => {
  const { selected, onChange } = useMultiselect([]);

  return (
    <>
      <Header bgColor useBack />
      <S.ReviewWriteWrap>
        <S.Tit>
          어떤 점이 워케이션 중<br />
          가장 좋았나요?
        </S.Tit>
        <S.SubTit>이 장소의 장점을 골라주세요! (복수선택)</S.SubTit>
        <S.CheckWrap>
          <CheckBox
            selectedItemIds={selected}
            onChange={onChange}
            isIcon
            items={[
              {
                id: "chk1",
                label: "식사메뉴가\n있어요",
                iconType: "SNACK_B",
              },
              {
                id: "chk2",
                label: "와이파이가\n빵빵해요",
                iconType: "WIFI_B",
              },
              {
                id: "chk3",
                label: "콘센트 자리\n많아요",
                iconType: "POWER_B",
              },
              {
                id: "chk4",
                label: "좌석이 업무하기\n좋아요",
                iconType: "SEAT_B",
              },
              {
                id: "chk5",
                label: "조용한 공간이\n있어요",
                iconType: "QUIET_B",
              },
            ]}
          />
        </S.CheckWrap>

        <Button size="lg" bgColor="black">
          등록하기
        </Button>
      </S.ReviewWriteWrap>
    </>
  );
};

export default ReviewWrite;
