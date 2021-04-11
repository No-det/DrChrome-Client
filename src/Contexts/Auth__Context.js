import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { auth } from "../Firebase/firebase";
export const AuthContext = createContext();

const Auth__contextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(Object());
  const [loading, setLoading] = useState(true);
  const [userUpdated, setUserUpdated] = useState(false);

  const getUserData = async () => {
    let res = await axios.get(`http://localhost:8000/api/getUser/${user.uid}`);
    setUserData(Object.assign(res.data, userData));
  }

  useEffect(() => {
    user && getUserData();
  }, [user]);

  useEffect(() => {
    !userData && user && getUserData();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [userUpdated]);

  return (
    <AuthContext.Provider value={{ user, setUser, setUserUpdated, userData, getUserData }}>
      { (loading && Object.keys(userData).length !== 0) ? <Loader /> : props.children }
    </AuthContext.Provider>
  );
};

export default Auth__contextProvider;
