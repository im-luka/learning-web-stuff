import { ComponentProps, FC } from "react";
import { Greet } from "../greet";

export const CustomComponent: FC<ComponentProps<typeof Greet>> = ({
  name,
  messageCount,
}) => {
  return (
    <div>
      logged in user is {name} with {messageCount} messages
    </div>
  );
};
