import React, { useContext } from "react";
import styles from "./styles.module.scss";
import ThemeContext from "~/context/ThemeContext";

function Cell({
  content,
  onClicked,
  sx = ({ theme }) => ({
    borderColor: theme.color,
    color: theme.color,
  }),
  ...props
}) {
  const { currentTheme } = useContext(ThemeContext);

  const mergedStyles = {
    ...sx({ theme: currentTheme }),
  };

  return (
    <div
      className={styles.wrapper}
      {...props}
      onClick={onClicked}
      style={mergedStyles}
    >
      {content}
    </div>
  );
}

export default Cell;
