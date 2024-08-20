import React, { createContext, useState } from "react";
import useChanged from "~/hooks/useChanged";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useChanged(
    "light",
    (newMode) => {
      setCurrentTheme(themes[mode]);
    },
    () => {}
  );
  const [themes, setThemes] = useState({
    light: { color: "black", backgroundColor: "white" },
    dark: { color: "white", backgroundColor: "black" },
  });
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        themes,
        setThemes,
        currentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
