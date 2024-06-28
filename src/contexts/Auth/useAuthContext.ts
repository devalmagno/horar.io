import { useContext } from "react";

import { AuthContext } from "./AuthContext";

const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (!authContext)
        throw new Error(
            "AuthContext has to be used within <AuthContext.Provider>"
        );

    return authContext;
}

export {
    useAuthContext,
};