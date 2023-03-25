import React from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialThemeContext: ThemeContextType = {
  theme: "yellow",
  setTheme: () => {},
};

export const ThemeContext =
  React.createContext<ThemeContextType>(initialThemeContext);
