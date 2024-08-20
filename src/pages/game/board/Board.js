import { useContext } from "react";
import styles from "./styles.module.scss";
import ThemeContext from "~/context/ThemeContext";
import Cell from "../cell/Cell";

function Board({
  table,
  onCellClicked,
  sx = ({ theme }) => ({
    backgroundColor: theme.backgroundColor,
  }),
  ...props
}) {
  const { currentTheme } = useContext(ThemeContext);

  const mergedStyles = {
    ...sx({ theme: currentTheme }),
  };

  const cells = [];

  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    const rowCells = [];
    for (let j = 0; j < row.length; j++) {
      const content = table[i][j] !== null ? table[i][j] : "";
      rowCells.push(
        <Cell key={j} onClicked={() => onCellClicked(i, j)} content={content} />
      );
    }
    cells.push(
      <div key={i} className={styles.row}>
        {rowCells}
      </div>
    );
  }

  return (
    <div className={styles.wrapper} {...props} style={mergedStyles}>
      {cells}
    </div>
  );
}
export default Board;
