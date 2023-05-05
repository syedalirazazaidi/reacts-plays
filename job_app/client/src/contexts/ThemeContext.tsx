import React, { createContext, useState } from "react";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext({});
function ThemeContextProvider({ children }: ProductProviderProps) {
  const [isLightTheme, isSetLightTheme] = useState({
    isLight: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555",
    },
  });
  return (
    <ThemeContext.Provider value={{ isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
