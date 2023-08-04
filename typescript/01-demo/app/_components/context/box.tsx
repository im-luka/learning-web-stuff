import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ background: theme.primary.main, color: theme.secondary.text }}
    >
      Theme Context Box
    </div>
  );
};
