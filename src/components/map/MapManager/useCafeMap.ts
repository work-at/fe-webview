import { Coordinates } from "@/domains/map.type";
import { useCafePinsQuery, useCafesQuery } from "@/domains/cafe";
import { useCallback } from "react";
import { useFlow } from "@/stack";
import { PATH } from "@/constants";

type useCafeMapProps = {
  isReloaded: boolean;
  isSelected: boolean;
  userCoordinates: Coordinates | undefined;
};

const useCafeMap = ({ userCoordinates, isReloaded, isSelected }: useCafeMapProps) => {
  const { push } = useFlow();
  const { data: cafePins, isLoading: isCafePinsLoading } = useCafePinsQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
    },
    {
      enabled: isSelected && isReloaded,
      keepPreviousData: true,
      suspense: false,
    }
  );

  const { data: cafes, isLoading: isCafesLoading } = useCafesQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
    },
    {
      enabled: isSelected,
      suspense: false,
    }
  );

  const navigateToCafeDetail = useCallback(
    (id: number, userAddress: string) => {
      push(PATH.CAFE.stack, { cafeId: id, userAddress });
    },
    [push]
  );

  return {
    cafePins,
    isCafePinsLoading,
    cafes,
    isCafesLoading,
    navigateToCafeDetail,
  };
};

export default useCafeMap;
