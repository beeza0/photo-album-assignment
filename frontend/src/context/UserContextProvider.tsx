import React from "react";
import UserContext from "./UserContext";
import { User } from "../types/users.types";

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const getInitialState = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : {};
  };
  const [user, setUser] = React.useState(getInitialState());

  const handleSetUser = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogOut = () => {
    setUser({});
    localStorage.setItem("user", "");
  };

  return (
    <UserContext.Provider value={{ user, handleSetUser, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
