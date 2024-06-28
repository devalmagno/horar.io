import { ReactNode, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { collection, getDocs } from "@firebase/firestore";

import { auth, db } from "../../services/firebaseConfig";

import UserType from "../../types/User";
import { AuthContext } from "./AuthContext";

type Props = {
  children: ReactNode;
};

const AuthProvider = (props: Props) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [userList, setUserList] = useState<UserType[]>([]);

  const usersCollectionRef = collection(db, "users");

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      setAuthUser(result.user);

      if (
        userList.length > 0 &&
        userList.some((e) => e.email === result.user.email)
      ) {
        setUserIsAuthenticated(true);
      } else logout();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    console.log(auth);
    signOut(auth)
      .then(() => {
        console.log("sign out sucessful");
      })
      .catch(console.log);

    setUserIsAuthenticated(false);
  };

  useEffect(() => {
    const getUserList = async () => {
      const data = await getDocs(usersCollectionRef);
      const usersArray = data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as UserType)
      );
      setUserList(usersArray);
    };

    getUserList();
  }, [usersCollectionRef]);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        userIsAuthenticated,
        userList,
        setUserList,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
