import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const Auth__contextProvider = (props) => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const newToken = sessionStorage.getItem("token");
    if (newToken) {
      setToken(newToken);
      const url = "http://localhost:8000/auth/user";
      axios
        .get(url, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => {
          const { user } = data.user;
          setUser(user);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth__contextProvider;
