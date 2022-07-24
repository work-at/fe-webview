import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useDinerPinsQuery, useDinerQuery, useDinersQuery } from "@/domains/diner";
import { useCallback } from "react";
import { useFlow } from "@/stack";

type useDinerMapProps = {
  userCoordinates: Coordinates;
  isReloaded: boolean;
  isSelected: boolean;
  selectedCardId: number | undefined;
  isListShown: boolean;
};

const useDinerMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId, isListShown }: useDinerMapProps) => {
  const { push } = useFlow();

  const { data: dinerPins, isLoading: isDinerPinsLoading } = useDinerPinsQuery(
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

  const { data: diner, isLoading: isDinerLoading } = useDinerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: isSelected && !!selectedCardId,
      suspense: false,
    }
  );

  const { data: diners, isLoading: isDinersLoading } = useDinersQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
    },
    {
      enabled: isSelected && isListShown,
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
    diners,
    isDinerLoading,
    isDinersLoading,
    navigateToDinerDetail,
  };
};

export default useDinerMap;
