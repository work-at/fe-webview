import { PATH } from "@/constants";
import { Coordinates } from "@/domains/map.type";
import { useCafePinsQuery, useCafeQuery } from "@/domains/cafe";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type useCafeMapProps = {
  isReloaded: boolean;
  isSelected: boolean;
  userCoordinates: Coordinates | undefined;
  selectedCardId: number | undefined;
};

const useCafeMap = ({ userCoordinates, isReloaded, isSelected, selectedCardId }: useCafeMapProps) => {
  const navigate = useNavigate();
  const { data: cafePins, isLoading: isCafePinsLoading } = useCafePinsQuery(
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

  const { data: cafe, isLoading: isCafeLoading } = useCafeQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
    }
  );

  const navigateToCafeDetail = useCallback((id: number) => {
    navigate(`${PATH.WORKER.full}/${id}`);
  }, []);

  return {
    cafePins,
    isCafePinsLoading,
    cafe,
    isCafeLoading,
    navigateToCafeDetail,
  };
};

export default useCafeMap;
