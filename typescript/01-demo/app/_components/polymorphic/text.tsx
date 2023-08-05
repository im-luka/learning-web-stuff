import { ComponentProps, ElementType, FC, ReactNode } from "react";

type OwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: ReactNode;
  as?: E;
};
type Props<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps<E>>;

export const Text = <E extends ElementType = "p">({
  size,
  color,
  children,
  as,
}: Props<E>) => {
  const Component = as || "p";

  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
