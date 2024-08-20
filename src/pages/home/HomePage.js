import React, { useContext } from "react";
import Button from "~/components/button/Button";
import useChanged from "~/hooks/useChanged";
import ThemeContext from "~/context/ThemeContext";
import styles from "./styles.module.scss";
import GamePage from "../game/GamePage";
import SettingPage from "../setting/SettingPage";

function HomePage({
  sx = ({ theme }) => ({
    backgroundColor: theme.backgroundColor,
  }),
  changePage,
}) {
  const { currentTheme, setMode, mode } = useContext(ThemeContext);

  const [value, setValue] = useChanged(
    0,
    (newValue) => {
      console.log(`NEW VALUE::${newValue}`);
    },
    (oldValue) => {
      console.log(`OLD VALUE::${oldValue}`);
    }
  );

  const btnChangeMode = (
    <Button
      content={mode == "light" ? "dark mode" : "light mode"}
      onClick={() => {
        setMode((preMode) => {
          if (preMode == "light") return "dark";
          else return "light";
        });
      }}
    />
  );

  return (
    <div className={styles.wrapper} style={sx({ theme: currentTheme })}>
      <Button
        content={"play"}
        onClick={() => {
          changePage(<GamePage changePage={changePage} />);
        }}
        style={{}}
      />
      {btnChangeMode}
      <Button
        content={"settings"}
        onClick={() => {
          changePage(<SettingPage changePage={changePage} />);
        }}
        style={{}}
      />
    </div>
  );
}

export default HomePage;
