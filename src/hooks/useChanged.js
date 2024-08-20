import React, { useEffect, useState } from "react";

function useChanged(defaultValue, onChanged, beforeChanged) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChanged(value);
    return () => beforeChanged(value);
  }, [value]);

  return [value, setValue];
}

export default useChanged;
