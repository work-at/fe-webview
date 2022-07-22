import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useDinerPinsQuery, useDinerQuery } from "@/domains/diner";
import { useCallback } from "react";
import { useFlow } from "@/stack";

type useDinerMapProps = {
  userCoordinates: Coordinates;
  isReloaded: boolean;
  isSelected: boolean;
  selectedCardId: number | undefined;
};

const useDinerMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId }: useDinerMapProps) => {
  const { push } = useFlow();

  const { data: dinerPins, isLoading: isDinerPinsLoading } = useDinerPinsQuery(
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

  const { data: diner, isLoading: isDinerLoading } = useDinerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
      suspense: false,
    }
  );

  const navigateToDinerDetail = useCallback(
    (id: number) => {
      push(PATH.DINER.stack, { dinerId: id });
    },
    [push]
  );

  return {
    dinerPins,
    isDinerPinsLoading,
    diner,
    isDinerLoading,
    navigateToDinerDetail,
  };
};

export default useDinerMap;
