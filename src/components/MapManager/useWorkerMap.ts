import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useFlow } from "@/stack";
import { useWorkerPinsQuery, useWorkerQuery, useWorkersQuery } from "@/domains/worker";
import { useCallback } from "react";

type useWorkerMapProps = {
  userCoordinates: Coordinates;
  isReloaded: boolean;
  isSelected: boolean;
  selectedCardId: number | undefined;
  isListShown: boolean;
};

const useWorkerMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId, isListShown }: useWorkerMapProps) => {
  const { push } = useFlow();
  const { data: workerPins, isLoading: isWorkerPinsLoading } = useWorkerPinsQuery(
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

  const { data: worker, isLoading: isWorkerLoading } = useWorkerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: isSelected && !!selectedCardId,
      suspense: false,
    }
  );

  const { data: workers, isLoading: isWorkersLoading } = useWorkersQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
    },
    {
      enabled: isSelected && isListShown,
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
    workers,
    isWorkerLoading,
    isWorkersLoading,
    navigateToWorkerDetail,
  };
};

export default useWorkerMap;
