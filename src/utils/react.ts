import { MutableRefObject } from "react";
import { RefCallBack } from "react-hook-form";

export const handleRefInjection =
  <Instance>(reactHookFormRef: RefCallBack, reactRef: MutableRefObject<Instance | null>) =>
  (instance: Instance | null) => {
    reactHookFormRef(instance);
    reactRef.current = instance;
  };
