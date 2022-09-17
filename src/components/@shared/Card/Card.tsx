import { DEFAULT_IMAGE } from "@/domains/common.constant";
import useErrorImageReplace from "@/hooks/useErrorImageReplace";
import { useEffect, useRef, useState } from "react";
import * as S from "./Card.styled";

export type CardItem = {
  id: number;
  type: "cafe" | "diner" | "worker";
  title: string;
  imageUrl?: string;
  reviewNum?: number;
  addr?: string;
  job?: string;
  year?: string;
  tags: string[];
  workchats?: number;
};

type CardProps = CardItem & {
  className?: string;
  onClick?: () => void;
};

const Card = ({
  type,
  title,
  reviewNum,
  addr,
  job,
  year,
  tags,
  imageUrl,
  className,
  workchats,
  onClick,
}: CardProps) => {
  const { imageRef } = useErrorImageReplace(imageUrl, DEFAULT_IMAGE);

  return (
    <S.CardWrap className={className} isClickable={!!onClick} onClick={onClick}>
      <S.CardTop>
        <S.CardThumb>
          <img ref={imageRef} src={imageUrl === "" || !imageUrl ? DEFAULT_IMAGE : imageUrl} alt={`${title} 이미지`} />
        </S.CardThumb>
        <S.DetailInfo>
          <S.Title>{title}</S.Title>
          {type === "worker" && (
            <S.WalkChat>
              워크챗 <S.ChatNum>{workchats}</S.ChatNum>
            </S.WalkChat>
          )}
          {type === "worker" ? (
            <S.WorcationerEtc>
              <S.InfoList>{job}</S.InfoList>
              <S.InfoList>{year}</S.InfoList>
            </S.WorcationerEtc>
          ) : (
            <S.StoreEtc>
              <S.ReviewTxt>리뷰 ({reviewNum})</S.ReviewTxt>
              <S.AddrTxt>{addr}</S.AddrTxt>
            </S.StoreEtc>
          )}
        </S.DetailInfo>
      </S.CardTop>
      <S.CardBottom>
        {tags?.map((tag, index) => (
          <S.TagList key={index}>{tag}</S.TagList>
        ))}
      </S.CardBottom>
    </S.CardWrap>
  );
};

export default Card;
