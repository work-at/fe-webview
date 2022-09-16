import { Coordinates } from "@/domains/map.type";
import { alertUserPositionLoadError } from "@/utils/browser";
import { useEffect, useState } from "react";

const useCoordinates = () => {
  const [userCoordinates, setUserCoordinates] = useState<Coordinates>();

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        setUserCoordinates({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      },
      (error) => {
        alertUserPositionLoadError(error);
      },
      {
        maximumAge: 1000 * 10,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { userCoordinates };
};

export default useCoordinates;
