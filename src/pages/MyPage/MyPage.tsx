import Icon from "@/assets/Icon";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useUploadUserProfileImageMutation, useUserInfo } from "@/domains/user";
import { useFlow } from "@/stack";
import { useCallback, useState } from "react";
import * as S from "./MyPage.styled";

// 3개의 스택

export const isValidFileSize = (file: File) => {
  return file.size <= 1000 * 1000 * 10;
};

const MyPage = () => {
  const { push } = useFlow();
  const [imageFile, setImageFile] = useState<File>();
  const { data: userInfo } = useUserInfo();
  const { mutateAsync: uploadProfileImage } = useUploadUserProfileImageMutation();

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

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { files } }) => {
    if (!files) return;

    if (!isValidFileSize(files[0])) {
      alert("파일 사이즈는 10MB를 넘길 수 없습니다.");
      return;
    }

    uploadProfileImage(files[0]);
    setImageFile(files[0]);
  };

  return (
    <StackLayout appBar={{ title: "마이페이지" }} navigationPath="my-page">
      <S.MyPageMainWrap>
        <S.TopInfo>
          <S.UserPicture>
            <S.UserThumb htmlFor="profile-image">
              <img src={userInfo?.imageUrl} alt="유저 이미지" />
              <input
                type="file"
                id="profile-image"
                accept=".jpg, .png, .jpeg, tiff"
                style={{ display: "none" }}
                onInput={handleImageChange}
              />
            </S.UserThumb>
            <S.CameraLabel>
              <Icon icon="IconCamera" />
              <S.BtnCamera type="file" accept="image/*" />
            </S.CameraLabel>
          </S.UserPicture>
          <S.UserName>{userInfo?.nickname}</S.UserName>
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

        <S.CertiWrap>
          <S.BtnEmailCerti>
            <Icon icon="IconStar" />
            <S.Certitxt onClick={handleEmailVerificationRoute}>회사 인증하고 워크챗 참여하기!</S.Certitxt>
          </S.BtnEmailCerti>
        </S.CertiWrap>
      </S.MyPageMainWrap>
    </StackLayout>
  );
};

export default MyPage;
