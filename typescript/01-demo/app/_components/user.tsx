import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    setUser({
      name: "luka",
      email: "luka@mail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <div className="flex space-x-2">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p>
    </div>
  );
};
