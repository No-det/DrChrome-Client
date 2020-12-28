import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const Auth__contextProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();

  useEffect(() => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    console.log(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, token }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth__contextProvider;
