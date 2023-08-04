import { FC } from "react";

type Props = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet: FC<Props> = ({ name, messageCount, isLoggedIn }) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages.`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};
