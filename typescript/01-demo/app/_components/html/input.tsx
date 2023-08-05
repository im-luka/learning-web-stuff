import { ComponentProps, FC } from "react";

type Props = ComponentProps<"input">;

export const Input: FC<Props> = (props) => {
  return <input type="text" {...props} />;
};
