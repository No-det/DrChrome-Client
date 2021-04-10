import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const AuthContext = createContext();

const Auth__contextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [userUpdated]);

  return (
    <AuthContext.Provider value={{ user, setUser, setUserUpdated }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export default Auth__contextProvider;
