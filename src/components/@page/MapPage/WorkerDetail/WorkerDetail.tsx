import Tag from "@/components/@shared/Tag/Tag";
import Header from "@/components/@shared/Header/Header";
import Button from "@/components/@shared/Button/Button";
import * as S from "./WorkerDetail.styled";
import UserImg from "@/assets/images/walkchat1.png";

const WorkerDetail = () => {
  return (
    <>
      <Header useBack bgColor />
      <S.WorkerDetailWrap>
        <S.TopInfo>
          <S.UserThumb>
            <img src={UserImg} alt="유저 이미지" />
          </S.UserThumb>
          <S.UserName>이름여덟글자제한</S.UserName>
          <S.UserEmail>emarteveryday</S.UserEmail>
          <S.EtcInfo>
            <S.EtcList>디자인</S.EtcList>
            <S.EtcList>1-2년차</S.EtcList>
            <S.EtcChatList>
              워크챗<strong>05</strong>
            </S.EtcChatList>
          </S.EtcInfo>
        </S.TopInfo>
        <S.DetailInfo>
          <S.AboutMe>
            내용 커피챗에서 베껴왔어요. 인생-커리어 다지기에 관심이 많고, 어떻게 원하는 일을 찾고, 만들고, 즐길 수
            있을지 언제나 고민하고 있습니다. 일을 행복하게 오래 즐길 수 있는 방법을 고민하고 있는 워케이셔너와의 만남을
            기대합니다.
            <br />
            <br />
            그래서 남들 하는대로 취업활동을 하지 않았고, 흔치 않게 회사생활이 즐거운 워커홀릭이기 때문에 상상과 다른
            인상을 받으실 수도 있을 것 같네요. 저에 대한 관심과 기대가 있으시다면 편하게 워크챗 신청을 해주세요! <br />
            <br />
            여행, 취업, 실무적 질문 모두 좋습니다.
          </S.AboutMe>
          <S.HopeTit>희망 활동</S.HopeTit>
          <S.HopeTag>
            <Tag walkChat iconType={"WalkChatReview1"}>
              디자인 같이해요
            </Tag>
            <Tag walkChat iconType={"WalkChatReview2"}>
              개발 같이해요
            </Tag>
            <Tag walkChat iconType={"WalkChatReview3"}>
              기획 같이해요
            </Tag>
          </S.HopeTag>
        </S.DetailInfo>
        <Button size="lg" bgColor="black">
          워크챗 신청
        </Button>
      </S.WorkerDetailWrap>
    </>
  );
};

export default WorkerDetail;
