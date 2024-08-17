import React, { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export  const ThemeContextProvider = ({ children }) => {
  const useColorTheme = () => {
    const [mode, setMode] = useState("light");
    const theme = createTheme({
      palette: {
        mode: mode,
      },
    });

    const toggleColorMode = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return {
      mode,
      toggleColorMode,
      theme,
    };
  };

  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={value.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
