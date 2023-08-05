import { ComponentType, FC } from "react";
import { Login } from "./login";
import { ProfileProps } from "./profile";

type Props = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};

export const Private: FC<Props> = ({ isLoggedIn, component: Component }) => {
  if (isLoggedIn) {
    return <Component name="luka" />;
  }
  return <Login />;
};
