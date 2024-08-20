import React, { useContext } from "react";
import styles from "./styles.module.scss";
import ThemeContext from "~/context/ThemeContext";

function Button({
  content,
  sx = ({ theme }) => ({
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    borderWidth: "2px",
    borderColor: theme.color,
    borderStyle: "solid",
    cursor: "pointer",
  }),
  style,
  ...props
}) {
  const { currentTheme } = useContext(ThemeContext);

  const mergedStyles = {
    ...sx({ theme: currentTheme }),
    ...style,
  };

  return (
    <button className={styles.wrapper} {...props} style={mergedStyles}>
      {content}
    </button>
  );
}

export default Button;
