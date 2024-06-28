import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";

import UserType from "../../types/User";

type AuthContextType = {
    authUser: User | null;
    userIsAuthenticated: boolean;
    userList: UserType[];
    setUserList: Dispatch<SetStateAction<UserType[]>>;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export {
    AuthContext
};