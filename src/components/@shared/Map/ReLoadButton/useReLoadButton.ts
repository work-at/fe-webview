import { useCallback, useEffect, useRef, useState } from "react";

const useReLoadButton = () => {
  const [lastReloadTimestamp, setLastReloadTimeStamp] = useState(new Date().getTime());
  const lastReloadTimestampRef = useRef(lastReloadTimestamp - 1);

  const updateReloadTime = useCallback(() => {
    const currentTimestamp = new Date().getTime();
    setLastReloadTimeStamp(currentTimestamp);
  }, []);

  useEffect(() => {
    lastReloadTimestampRef.current = lastReloadTimestamp;
  }, [lastReloadTimestamp]);

  return {
    isReloaded: lastReloadTimestampRef.current !== lastReloadTimestamp,
    updateReloadTime,
  };
};

export default useReLoadButton;
