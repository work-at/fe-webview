import { Coordinates } from "@/domains/map.type";
import { useCafePinsQuery, useCafeQuery, useCafesQuery } from "@/domains/cafe";
import { useCallback } from "react";
import { useFlow } from "@/stack";
import { PATH } from "@/constants";

type useCafeMapProps = {
  isReloaded: boolean;
  isSelected: boolean;
  userCoordinates: Coordinates | undefined;
  selectedCardId: number | undefined;
  isListShown: boolean;
};

const useCafeMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId, isListShown }: useCafeMapProps) => {
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

  const { data: cafe, isLoading: isCafeLoading } = useCafeQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId && isSelected,
      suspense: false,
    }
  );

  const { data: cafes, isLoading: isCafesLoading } = useCafesQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
    },
    {
      enabled: isSelected && isListShown,
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
    cafes,
    isCafeLoading,
    isCafesLoading,
    navigateToCafeDetail,
  };
};

export default useCafeMap;
