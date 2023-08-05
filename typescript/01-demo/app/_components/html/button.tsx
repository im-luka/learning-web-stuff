import { ComponentProps, FC } from "react";

type Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;

export const Button: FC<Props> = ({ variant, children, ...rest }) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
