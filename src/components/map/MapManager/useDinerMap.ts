import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useDinerPinsQuery, useDinersQuery } from "@/domains/diner";
import { useCallback } from "react";
import { useFlow } from "@/stack";

type useDinerMapProps = {
  userCoordinates: Coordinates;
  isReloaded: boolean;
  isSelected: boolean;
};

const useDinerMap = ({ userCoordinates, isReloaded, isSelected }: useDinerMapProps) => {
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

  const { data: diners, isLoading: isDinersLoading } = useDinersQuery(
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

  const navigateToDinerDetail = useCallback(
    (id: number, userAddress: string) => {
      push(PATH.DINER.stack, { dinerId: id, userAddress });
    },
    [push]
  );

  return {
    dinerPins,
    isDinerPinsLoading,
    diners,
    isDinersLoading,
    navigateToDinerDetail,
  };
};

export default useDinerMap;
