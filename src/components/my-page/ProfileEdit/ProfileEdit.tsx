import Icon from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { Button } from "@/components/@shared/Button/Button.styled";
import CheckBox from "@/components/@shared/CheckBox";
import { DESIRED_ACTIVITIES } from "@/domains/common.constant";
import { DesiredActivity } from "@/domains/common.type";
import { useUpdateUserProfileMutation } from "@/domains/user";
import useAutoSizeTextArea from "@/hooks/useAutoSizeTextArea";
import { useFlow } from "@/stack";
import { handleRefInjection } from "@/utils/react";
import { useActivityParams } from "@stackflow/react";
import { atom, useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./ProfileEdit.styled";

type ProfileFormData = {
  nickName: string;
  story: string;
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

export const jobAndYearAtom = atom<{ job: string; year: string } | undefined>(undefined);

const ProfileEdit = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userInfo } = useActivityParams<{ userInfo: any }>();
  const { register, handleSubmit, setValue, watch } = useForm<ProfileFormData>();
  const { push } = useFlow();
  const { pop } = useFlow();
  const { mutateAsync: updateUserProfile } = useUpdateUserProfileMutation();
  const [jobAndYear, setJobAndYear] = useAtom(jobAndYearAtom);
  const [selectedActivities, setSelectedActivities] = useState<DesiredActivity[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { ref, ...storyRegisterRest } = register("story", {
    required: true,
    maxLength: {
      message: ERROR_TEXT.STORY_LENGTH_LIMIT_EXCEEDED,
      value: 450,
    },
  });

  const story = watch("story");

  useAutoSizeTextArea(textAreaRef.current, story);

  const handleEmailVerificationRoute = useCallback(() => {
    push("EmailVerification", {});
  }, [push]);

  const handleJobAndYearRoute = useCallback(() => {
    push("JobAndYearSelect", {
      userInfo,
    });
  }, [userInfo, push]);

  const handleDesiredActivitySelect: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.target;

    setSelectedActivities((activities) => {
      if (activities.includes(value)) {
        return activities.filter((activity) => activity !== value);
      }

      const newActivities = [...activities].concat([value]);

      if (newActivities.length > 3) {
        return activities;
      }

      return newActivities;
    });
  }, []);

  const handleFormSubmit = handleSubmit(async (formData) => {
    if (!jobAndYear) {
      alert("직업과 경력이 설정되지 않았습니다");
      return;
    }

    console.log("selectedActivities", Array.from(new Set(selectedActivities)));

    await updateUserProfile({
      desiredActivities: Array.from(new Set(selectedActivities)),
      nickName: formData.nickName,
      story: formData.story,
      job: jobAndYear.job,
      yearOfService: jobAndYear.year,
    });

    pop();
  });

  useEffect(() => {
    setValue("nickName", userInfo.nickname);
    setValue("story", userInfo.story);
    setSelectedActivities(userInfo.activities.map((activity: any) => activity.name));
  }, [userInfo, setValue]);

  useEffect(() => {
    if (jobAndYear) {
      return;
    }

    setJobAndYear({
      job: userInfo.position.name,
      year: userInfo.workingYear.name,
    });
  }, [userInfo, jobAndYear, setJobAndYear]);

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
            <S.BtnEdit type="button" onClick={handleJobAndYearRoute}>
              <Icon icon="BtnEdit" />
            </S.BtnEdit>
          </S.ItemBody>
        </S.MyInfoItem>
        <S.MyInfoFullItem>
          <S.ItemHead>자기소개</S.ItemHead>
          <S.ItemBody>
            <S.TxtWrap
              ref={handleRefInjection(ref, textAreaRef)}
              {...storyRegisterRest}
              defaultValue={userInfo?.story}
            ></S.TxtWrap>
          </S.ItemBody>
        </S.MyInfoFullItem>
        <S.MyInfoFullItem>
          <S.ItemHead>
            희망활동<S.HeadEtcTxt>(최대 3개)</S.HeadEtcTxt>
          </S.ItemHead>
          <S.ItemBody>
            <S.ChekBoxWrap>
              <CheckBox
                onChange={handleDesiredActivitySelect}
                selectedItemIds={selectedActivities}
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
