import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useCafePinsQuery, useCafeQuery } from "@/domains/cafe";
import { useCallback } from "react";
import { useFlow } from "@/stack";

type useCafeMapProps = {
  isReloaded: boolean;
  isSelected: boolean;
  userCoordinates: Coordinates | undefined;
  selectedCardId: number | undefined;
};

const useCafeMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId }: useCafeMapProps) => {
  const { push } = useFlow();

  const { data: cafePins, isLoading: isCafePinsLoading } = useCafePinsQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
      page: 1,
    },
    {
      enabled: isSelected && isReloaded,
      keepPreviousData: true,
      suspense: false,
    }
  );

  const { data: cafe, isLoading: isCafeLoading } = useCafeQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
      suspense: false,
    }
  );

  const navigateToCafeDetail = useCallback(
    (id: number) => {
      push(PATH.CAFE.stack, { cafeId: id });
    },
    [push]
  );

  return {
    cafePins,
    isCafePinsLoading,
    cafe,
    isCafeLoading,
    navigateToCafeDetail,
  };
};

export default useCafeMap;
