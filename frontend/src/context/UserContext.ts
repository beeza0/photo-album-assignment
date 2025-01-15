import { createContext } from "react";
import { User } from "../types/users.types";

interface IUserContext {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export default UserContext;
