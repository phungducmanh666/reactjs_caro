import React, { useContext } from "react";
import styles from "./styles.module.scss";
import HomePage from "../home/HomePage";
import Button from "~/components/button/Button";
import GameSettingContext from "~/context/GameSettingContext";
import Input from "~/components/input/Input";
import ThemeContext from "~/context/ThemeContext";

function SettingPage({
  changePage,
  sx = ({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  }),
}) {
  const { currentTheme } = useContext(ThemeContext);

  const mergedStyles = {
    ...sx({ theme: currentTheme }),
  };

  const { cellNum, setCellNum, numCellWin, setNumCellWin } =
    useContext(GameSettingContext);

  return (
    <div className={styles.wrapper} style={mergedStyles}>
      <div className={styles.functions}>
        <Button
          content={"home"}
          onClick={() => {
            changePage(<HomePage changePage={changePage} />);
          }}
          style={{}}
        />
      </div>
      <div className={styles.main}>
        <Input
          label={"Số ô"}
          value={cellNum}
          type="number"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setCellNum(value);
          }}
        />
        <Input
          label={"Số ô thắng"}
          value={numCellWin}
          type="number"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setNumCellWin(value);
          }}
        />
      </div>
    </div>
  );
}

export default SettingPage;
