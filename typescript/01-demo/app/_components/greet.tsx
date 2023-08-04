import { FC } from "react";

type Props = {
  name: string;
};

export const Greet = (props: Props) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread messages.</h2>
    </div>
  );
};
