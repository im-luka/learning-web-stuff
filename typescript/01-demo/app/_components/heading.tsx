import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading: FC<Props> = ({ children }) => {
  return <div className="bg-slate-700 p-1">{children}</div>;
};
