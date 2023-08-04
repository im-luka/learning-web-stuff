import { useContext } from "react";
import { UserContext } from "./user-context";

export const User = () => {
  const userCtx = useContext(UserContext);

  const handleLogin = () => {
    if (userCtx) {
      userCtx.setUser({
        name: "lukica",
        email: "lukica@mail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userCtx) {
      userCtx.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userCtx?.user?.name}</div>
      <div>User email is {userCtx?.user?.email}</div>
    </div>
  );
};
