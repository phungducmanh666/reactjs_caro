import React, { useContext, useState } from "react";
import Button from "~/components/button/Button";
import styles from "./styles.module.scss";
import HomePage from "../home/HomePage";
import Board from "./board/Board";
import ThemeContext from "~/context/ThemeContext";
import { create2DMaxtrix } from "~/utils/creator";
import GameSettingContext from "~/context/GameSettingContext";
import { checkConsecutive, checkWinner } from "~/utils/caculator";

function GamePage({
  changePage,
  sx = ({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  }),
}) {
  // theme
  const { currentTheme } = useContext(ThemeContext);

  const mergedStyles = {
    ...sx({ theme: currentTheme }),
  };

  // game play
  const { cellNum, numCellWin } = useContext(GameSettingContext);

  const [currentPlayer, setCurrentPlayer] = useState("x");

  const [table, setTable] = useState(create2DMaxtrix(cellNum, cellNum));

  const [winner, setWinner] = useState(null);

  const switchPlayer = () => {
    if (currentPlayer === "x") setCurrentPlayer("o");
    else setCurrentPlayer("x");
  };

  const handleCellClick = (i, j) => {
    if (table[i][j] != null) return;
    const newTable = table;
    newTable[i][j] = currentPlayer;
    setTable(newTable);
    const winner = checkWinner(newTable, i, j, numCellWin);
    if (winner) {
      setWinner(winner.player);
    }

    switchPlayer();
    console.log(`${i}::${j}`);
  };

  const reset = () => {
    setTable(create2DMaxtrix(cellNum, cellNum));
    setCurrentPlayer("x");
    setWinner(null);
  };

  if (winner) {
    return (
      <div className={styles.wrapper2} style={mergedStyles}>
        <strong style={mergedStyles}>Winner:{winner}</strong>
        <Button
          content="play again"
          onClick={() => {
            reset();
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper} style={mergedStyles}>
      <div className={styles.functions}>
        <Button
          content="home"
          onClick={() => {
            changePage(<HomePage changePage={changePage} />);
          }}
        />
        <div>
          <strong>current player: {currentPlayer}</strong>
        </div>
      </div>
      <div className={styles.main}>
        <Board table={table} onCellClicked={handleCellClick} />
      </div>
    </div>
  );
}

export default GamePage;
