import { PATH } from "@/constants";
import { useFlow } from "@/stack";
import { useWorkerPinsQuery, useWorkersQuery } from "@/domains/worker";
import { useCallback } from "react";

type useWorkerMapProps = {
  isReloaded: boolean;
  isSelected: boolean;
};

const useWorkerMap = ({ isReloaded, isSelected }: useWorkerMapProps) => {
  const { push } = useFlow();
  const { data: workerPins, isLoading: isWorkerPinsLoading } = useWorkerPinsQuery({
    enabled: isSelected && isReloaded,
    keepPreviousData: true,
    suspense: false,
  });

  const { data: workers, isLoading: isWorkersLoading } = useWorkersQuery({
    enabled: isSelected,
    suspense: false,
  });

  const navigateToWorkerDetail = useCallback(
    (id: number) => {
      push(PATH.WORKER.stack, { workerId: id });
    },
    [push]
  );

  return {
    workerPins,
    isWorkerPinsLoading,
    workers,
    isWorkersLoading,
    navigateToWorkerDetail,
  };
};

export default useWorkerMap;
