import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useWorkerPinsQuery, useWorkerQuery } from "@/domains/worker";
import { useFlow } from "@/stack";
import { useCallback } from "react";

type useWorkerMapProps = {
  userCoordinates: Coordinates;
  isReloaded: boolean;
  isSelected: boolean;
  selectedCardId: number | undefined;
};

const useWorkerMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId }: useWorkerMapProps) => {
  const { push } = useFlow();

  const { data: workerPins, isLoading: isWorkerPinsLoading } = useWorkerPinsQuery(
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

  const { data: worker, isLoading: isWorkerLoading } = useWorkerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
      suspense: false,
    }
  );

  const navigateToWorkerDetail = useCallback(
    (id: number) => {
      push(PATH.WORKER.stack, { workerId: id });
    },
    [push]
  );

  return {
    workerPins,
    isWorkerPinsLoading,
    worker,
    isWorkerLoading,
    navigateToWorkerDetail,
  };
};

export default useWorkerMap;
