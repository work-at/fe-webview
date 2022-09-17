import Icon from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useUploadUserProfileImageMutation, useUserInfo } from "@/domains/user";
import { useFlow } from "@/stack";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback, useEffect, useState } from "react";
import * as S from "./MyPage.styled";
import DefaultProfile from "@/assets/images/DefaultProfile.png";
import Lottie from "@/components/@shared/Lottie/Lottie.component";

// 3개의 스택

export const isValidFileSize = (file: File) => {
  return file.size <= 1000 * 1000 * 10;
};

export const isUserLocationBlockedAtom = atomWithStorage("is-user-location-blocked", false);

const MyPage = () => {
  const { push } = useFlow();
  const [imageFile, setImageFile] = useState<File>();
  const [_, setIsUserLocationBlocked] = useAtom(isUserLocationBlockedAtom);
  const { data: userInfo, refetch } = useUserInfo();
  const { mutateAsync: uploadProfileImage, isLoading } = useUploadUserProfileImageMutation();

  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : undefined;

  const handleProfileEditRoute = useCallback(() => {
    push("ProfileEdit", { userInfo });
  }, [push, userInfo]);

  const handleEmailVerificationRoute = useCallback(() => {
    push("EmailVerification", {});
  }, [push]);

  const handleEmailSettingRoute = useCallback(() => {
    push("Setting", {});
  }, [push]);

  const handleContactUsRoute = useCallback(() => {
    push("ContactUs", {});
  }, [push]);

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = async ({ currentTarget: { files } }) => {
    console.log("files", files);

    if (!files) return;

    if (!isValidFileSize(files[0])) {
      alert("파일 사이즈는 10MB를 넘길 수 없습니다.");
      return;
    }

    await uploadProfileImage(files[0]);
    setImageFile(files[0]);
    refetch();
  };

  useEffect(() => {
    setIsUserLocationBlocked(userInfo?.trackingOff ?? false);
  }, [userInfo, setIsUserLocationBlocked]);

  if (isLoading) {
    return (
      <StackLayout appBar={{ title: "마이페이지" }} navigationPath="my-page" isHide>
        <Lottie source={require("@/assets/loading.json")} speed={2} />
      </StackLayout>
    );
  }

  return (
    <StackLayout appBar={{ title: "마이페이지" }} navigationPath="my-page" isHide>
      <S.MyPageMainWrap>
        <S.TopInfo>
          <S.UserPicture>
            <S.UserThumb htmlFor="profile-image">
              <img src={imageUrl ?? userInfo?.imageUrl ?? DefaultProfile} alt="유저 이미지" />
              <input
                type="file"
                id="profile-image"
                accept=".jpg, .png, .jpeg, tiff"
                style={{ display: "none" }}
                onInput={handleImageChange}
              />
            </S.UserThumb>
            <S.CameraLabel htmlFor="profile-image-upload-button">
              <Icon icon="IconCamera" />
              <S.BtnCamera
                type="file"
                id="profile-image-upload-button"
                accept=".jpg, .png, .jpeg, tiff"
                style={{ display: "none" }}
                onInput={handleImageChange}
              />
            </S.CameraLabel>
          </S.UserPicture>
          <S.UserName>{userInfo?.nickname}</S.UserName>
          <S.UserEmail>{userInfo?.company ?? "회사 미인증"}</S.UserEmail>
          <S.EtcInfo>
            <S.EtcList>{userInfo?.position?.content}</S.EtcList>
            <S.EtcList>{userInfo?.workingYear?.content}</S.EtcList>
            <S.EtcChatList>
              워크챗<strong>{userInfo?.workchats}</strong>
            </S.EtcChatList>
          </S.EtcInfo>
        </S.TopInfo>

        <S.MyPageMenu>
          <S.MenuList>
            <S.MenuLink onClick={handleProfileEditRoute}>프로필 수정</S.MenuLink>
          </S.MenuList>
          <S.MenuList>
            <S.MenuLink onClick={handleEmailSettingRoute}>설정</S.MenuLink>
          </S.MenuList>
          <S.MenuList>
            <S.MenuLink onClick={handleContactUsRoute}>문의</S.MenuLink>
          </S.MenuList>
        </S.MyPageMenu>

        {!userInfo?.company && (
          <S.CertiWrap>
            <S.BtnEmailCerti>
              <Icon icon="IconStar" />
              <S.Certitxt onClick={handleEmailVerificationRoute}>회사 인증하고 워크챗 참여하기!</S.Certitxt>
            </S.BtnEmailCerti>
          </S.CertiWrap>
        )}
      </S.MyPageMainWrap>
    </StackLayout>
  );
};

export default MyPage;
