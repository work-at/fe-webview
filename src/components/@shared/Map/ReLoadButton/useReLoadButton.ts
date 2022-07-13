import { useCallback, useEffect, useRef, useState } from "react";

const useReLoadButton = () => {
  const [lastReloadTimeStamp, setLastReloadTimeStamp] = useState(new Date().getTime());
  const lastReloadTimeStampRef = useRef(lastReloadTimeStamp - 1);

  const updateReloadTime = useCallback(() => {
    const currentTimestamp = new Date().getTime();
    setLastReloadTimeStamp(currentTimestamp);
  }, []);

  useEffect(() => {
    lastReloadTimeStampRef.current = lastReloadTimeStamp;
  }, [lastReloadTimeStamp]);

  return {
    isReloaded: lastReloadTimeStampRef.current !== lastReloadTimeStamp,
    updateReloadTime,
  };
};

export default useReLoadButton;
