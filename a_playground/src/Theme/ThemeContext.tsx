import React from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialThemeContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext =
  React.createContext<ThemeContextType>(initialThemeContext);
