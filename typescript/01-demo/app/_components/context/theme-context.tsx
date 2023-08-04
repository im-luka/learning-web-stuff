import { FC, ReactNode, createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
