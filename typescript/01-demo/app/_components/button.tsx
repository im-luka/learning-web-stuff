"use client";

import { FC, MouseEvent } from "react";

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<Props> = ({ onClick }) => {
  return (
    <button className="border border-yellow-300 px-4 py-2" onClick={onClick}>
      Click Me Pls!
    </button>
  );
};
