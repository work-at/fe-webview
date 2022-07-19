import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useWorkerPinsQuery, useWorkerQuery } from "@/domains/worker";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type useWorkerMapProps = {
  userCoordinates: Coordinates;
  isReloaded: boolean;
  isSelected: boolean;
  selectedCardId: number | undefined;
};

const useWorkerMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId }: useWorkerMapProps) => {
  const navigate = useNavigate();
  const { data: workerPins, isLoading: isWorkerPinsLoading } = useWorkerPinsQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
      page: 1,
    },
    {
      enabled: isSelected && isReloaded,
      keepPreviousData: true,
    }
  );

  const { data: worker, isLoading: isWorkerLoading } = useWorkerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
    }
  );

  const navigateToWorkerDetail = useCallback((id: number) => {
    navigate(`${PATH.WORKER.full}/${id}`);
  }, []);

  return {
    workerPins,
    isWorkerPinsLoading,
    worker,
    isWorkerLoading,
    navigateToWorkerDetail,
  };
};

export default useWorkerMap;
