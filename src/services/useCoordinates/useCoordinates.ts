import { SERVICE_NAME } from "@/constants/services";
import { Coordinates } from "@/domains/map.type";
import { getUserCoordinates } from "@/utils/browser";
import { useCallback, useEffect, useState } from "react";
import { useQuery, UseQueryOptions } from "react-query";

type WorkerPinsQueryKey = readonly [typeof SERVICE_NAME.GET_USER_COORDINATES];

export const useCoordinatesService = (
  options?: UseQueryOptions<Coordinates, Error, Coordinates, WorkerPinsQueryKey>
) => {
  return useQuery<Coordinates, Error, Coordinates, WorkerPinsQueryKey>(
    [SERVICE_NAME.GET_USER_COORDINATES],
    getUserCoordinates,
    options
  );
};

const useCoordinates = () => {
  const [userCoordinates, setUserCoordinates] = useState<Coordinates>();

  const setCurrentUserCoordinates = useCallback(async () => {
    const userCoordinates = await getUserCoordinates();
    setUserCoordinates(userCoordinates);
  }, []);

  useEffect(() => {
    setCurrentUserCoordinates();
  }, []);

  return { userCoordinates, isLoading: !userCoordinates };
};

export default useCoordinates;
