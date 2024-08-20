import React, { createContext, useState } from "react";
import useChanged from "~/hooks/useChanged";

const GameSettingContext = createContext();

export const GameSettingProvider = ({ children }) => {
  const [cellNum, setCellNum] = useState(3);
  const [numCellWin, setNumCellWin] = useState(3);

  return (
    <GameSettingContext.Provider
      value={{
        cellNum,
        setCellNum,
        numCellWin,
        setNumCellWin,
      }}
    >
      {children}
    </GameSettingContext.Provider>
  );
};

export default GameSettingContext;
