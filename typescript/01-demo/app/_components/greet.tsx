import { FC } from "react";

type Props = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: Props) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};
