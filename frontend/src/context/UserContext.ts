import { createContext } from "react";
import { User } from "../types/users.types";

interface IUserContext {
  user: User;
  handleSetUser: (user: User) => void;
  handleLogOut: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export default UserContext;
