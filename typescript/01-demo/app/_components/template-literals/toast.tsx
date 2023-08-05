import { FC } from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type Props = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast: FC<Props> = ({ position }) => {
  return <div>Toast Notification with position - {position}</div>;
};
