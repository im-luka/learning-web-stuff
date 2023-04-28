import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props: Props) => {
  return <main>{props.children}</main>;
};
