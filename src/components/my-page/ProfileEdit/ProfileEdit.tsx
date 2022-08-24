import Icon from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { Button } from "@/components/@shared/Button/Button.styled";
import CheckBox from "@/components/@shared/CheckBox";
import { useMultiselect } from "@/components/@shared/CheckBox/Hooks";
import { DESIRED_ACTIVITIES } from "@/domains/common.constant";
import { DesiredActivity } from "@/domains/common.type";
import { useUpdateUserProfileMutation, useUserInfo } from "@/domains/user";
import { useFlow } from "@/stack";
import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./ProfileEdit.styled";

type ProfileFormData = {
  nickName: string;
  story: string;
  desiredActivities: DesiredActivity[];
};

const NICKNAME_LENGTH_LIMIT = 8;
const STORY_LENGTH_LIMIT = 300;

const ERROR_TEXT = {
  NICKNAME_LENGTH_LIMIT_EXCEEDED: `닉네임은 ${NICKNAME_LENGTH_LIMIT}자 이하로 입력해야 합니다.`,
  NICKNAME_REQUIRED: "닉네임을 입력해주십시오",
  SPECIAL_SYMBOLS_NOT_ALLOWED: "닉네임에 특수문자를 입력할 수 없습니다",
  STORY_LENGTH_LIMIT_EXCEEDED: `자기소개는 ${STORY_LENGTH_LIMIT}자 이하로 입력해야 합니다.`,
} as const;

// eslint-disable-next-line no-useless-escape
const emailRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

export const jobAndYearAtom = atom<any>({
  job: undefined,
  year: undefined,
});

const ProfileEdit = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: userInfo } = useUserInfo();
  const { register, handleSubmit, setValue, setError } = useForm<ProfileFormData>();
  const { push } = useFlow();
  const { onChange, selected } = useMultiselect([]);
  const { pop } = useFlow();
  const { mutateAsync: updateUserProfile } = useUpdateUserProfileMutation();
  const [jobAndYear] = useAtom(jobAndYearAtom);

  const handleEmailVerificationRoute = useCallback(() => {
    push("EmailVerification", {});
  }, [push]);

  const handleJobAndYearRoute = useCallback(() => {
    push("JobAndYearSelect", {});
  }, [push]);

  const handleFormSubmit = handleSubmit(async (formData) => {
    console.log("formData", formData);

    await updateUserProfile({
      desiredActivities: selected,
      nickName: formData.nickName,
      story: formData.story,
      job: jobAndYear.job,
      yearOfService: jobAndYear.year,
    });

    pop();
  });

  const handleStoryChange: React.FormEventHandler<HTMLDivElement> = ({ target }) => {
    const text = (target as HTMLDivElement).innerText;

    if (text.length > STORY_LENGTH_LIMIT) {
      setError("story", {
        message: ERROR_TEXT.STORY_LENGTH_LIMIT_EXCEEDED,
      });
    }

    setValue("story", text);
  };

  useEffect(() => {
    setValue("nickName", userInfo?.nickname ?? "");
    setValue("desiredActivities", userInfo?.activities.map((activity) => activity.name) ?? []);
    setValue("story", userInfo?.story ?? "");
  }, [userInfo, setValue]);

  // console.log("userInfo", userInfo);

  return (
    <StackLayout>
      <S.MyInfoEditWrap onSubmit={handleFormSubmit}>
        <S.MyInfoItem>
          <S.ItemHead>이름</S.ItemHead>
          <S.ItemBody>
            <S.Input
              {...register("nickName", {
                value: userInfo?.nickname,
                maxLength: {
                  value: NICKNAME_LENGTH_LIMIT,
                  message: ERROR_TEXT.NICKNAME_LENGTH_LIMIT_EXCEEDED,
                },
                required: {
                  value: true,
                  message: ERROR_TEXT.NICKNAME_REQUIRED,
                },
                validate: (value) => (emailRegExp.test(value) ? ERROR_TEXT.SPECIAL_SYMBOLS_NOT_ALLOWED : true),
              })}
              name="닉네임 입력"
            />
          </S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoItem>
          <S.ItemHead>소속</S.ItemHead>
          <S.ItemBody>
            <S.Txt>{userInfo?.position.content}</S.Txt>
            <S.Button type="button" onClick={handleEmailVerificationRoute} size="sm" round>
              회사 인증
            </S.Button>
          </S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoItem>
          <S.ItemHead>직무 및 경력</S.ItemHead>
          <S.ItemBody>
            <S.BtnEdit onClick={handleJobAndYearRoute}>
              <Icon icon="BtnEdit" />
            </S.BtnEdit>
          </S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoFullItem>
          <S.ItemHead>자기소개</S.ItemHead>
          <S.ItemBody>
            <S.TxtWrap contentEditable onInput={handleStoryChange}>
              {userInfo?.story}
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
                onChange={onChange}
                selectedItemIds={selected}
                widthAuto
                items={
                  DESIRED_ACTIVITIES.map((activity) => ({
                    id: activity.name,
                    label: activity.content,
                    iconType: activity.name,
                  })) ?? []
                }
              />
            </S.ChekBoxWrap>
          </S.ItemBody>
        </S.MyInfoFullItem>
        <Button type="submit" size="lg" bgColor="black">
          완료
        </Button>
      </S.MyInfoEditWrap>
    </StackLayout>
  );
};

export default ProfileEdit;
