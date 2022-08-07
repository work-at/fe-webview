import React, { useState } from "react";

export const useMultiselect = <T extends string>(initialValue: T[]) => {
  const [selected, setSelected] = useState<T[]>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as T;
    const index = selected.indexOf(value);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, ...[value]]);
    }
  };

  const onChangeOnly = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as T;
    const index = selected.indexOf(value);
    setSelected([value]);
    if (index > -1) {
      setSelected([]);
    } else {
      setSelected([value]);
    }
  };

  const isSelected = (value: T) => {
    return selected.includes(value);
  };

  return { selected, isSelected, onChange, onChangeOnly };
};
