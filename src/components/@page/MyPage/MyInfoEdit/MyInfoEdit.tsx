import * as S from "./MyInfoEdit.styled";
import Icon from "@/assets/Icon";
import Header from "@/components/@shared/Header";
import CheckBox from "@/components/@shared/CheckBox/CheckBox";
import Button from "@/components/@shared/Button/Button";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";

const MyInfoEdit = () => {
  const { selected, onChange } = useMultiselect([]);

  return (
    <>
      <Header bgColor useBack />
      <S.MyInfoEditWrap>
        <S.MyInfoItem>
          <S.ItemHead>이름</S.ItemHead>
          <S.ItemBody>지쳐버린말미잘</S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoItem>
          <S.ItemHead>소속</S.ItemHead>
          <S.ItemBody>
            shinsegae
            <Button size="sm" round>
              회사 인증
            </Button>
          </S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoItem>
          <S.ItemHead>직무 및 경력</S.ItemHead>
          <S.ItemBody>
            <S.BtnEdit>
              <Icon icon="BtnEdit" />
            </S.BtnEdit>
          </S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoFullItem>
          <S.ItemHead>자기소개</S.ItemHead>
          <S.ItemBody>
            <S.TxtWrap>
              내용 커피챗에서 베껴왔어요. 인생-커리어 다지기에 관심이 많고, 어떻게 원하는 일을 찾고, 만들고, 즐길 수
              있을지 언제나 고민하고 있습니다. 일을 행복하게 오래 즐길 수 있는 방법을 고민하고 있는 워케이셔너와의
              만남을 기대합니다.
              <br />
              <br />
              그래서 남들 하는대로 취업활동을 하지 않았고, 흔치 않게 회사생활이 즐거운 워커홀릭이기 때문에 상상과 다른
              인상을 받으실 수도 있을 것 같네요. 저에 대한 관심과 기대가 있으시다면 편하게 워크챗 신청을 해주세요!
              <br />
              <br />
              여행, 취업, 실무적 질문 모두 좋습니다.
            </S.TxtWrap>
          </S.ItemBody>
        </S.MyInfoFullItem>
        <S.MyInfoFullItem>
          <S.ItemHead>
            희망활동<S.HeadEtcTxt>(최대 3개)</S.HeadEtcTxt>
          </S.ItemHead>
          <S.ItemBody>
            <S.ChekBoxWrap>
              <CheckBox
                selectedItemIds={selected}
                onChange={onChange}
                widthAuto
                items={[
                  {
                    id: "chk1",
                    label: "주니어모여라",
                  },
                  {
                    id: "chk2",
                    label: "시니어모여라",
                  },
                  {
                    id: "chk3",
                    label: "직무토크하실분",
                  },
                  {
                    id: "chk4",
                    label: "진로고민",
                  },
                  {
                    id: "chk5",
                    label: "식사메이트구해요",
                  },
                  {
                    id: "chk6",
                    label: "열정맨",
                  },
                  {
                    id: "chk7",
                    label: "같이일해요",
                  },
                ]}
              />
            </S.ChekBoxWrap>
          </S.ItemBody>
        </S.MyInfoFullItem>
      </S.MyInfoEditWrap>
      <Button size="lg" bgColor="black">
        완료
      </Button>
    </>
  );
};

export default MyInfoEdit;
