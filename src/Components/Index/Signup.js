import { Alert } from "antd";
import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth__Context";
import { auth, signInWithGoogle } from "../../Firebase/firebase";
import { API_URL } from "../../utils/constants";

import GoogleIcon from "../../assets/google.svg";

import Design1 from "./Designs/design";
import "./index.css";

export default function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      const newUser = {
        name: name,
        email: result.user.email,
        uid: result.user.uid,
        emailVerified: result.user.emailVerified,
        isDoctor: undefined,
        image: `https://ui-avatars.com/api/?length=1&bold=true&name=${name}&background=454E62&color=fff`,
      };
      const response = await axios.post(`${API_URL}/auth/add-user`, newUser);
      if (response) props.history.push("/isDoctor");
    } catch (err) {
      if (err.response.data.includes("User already exists!")) {
        setError("User already exists. Please login");
      } else {
        setError("Some error occured. Please try again later.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
        emailVerified: true,
        image: result.user.photoURL,
        isDoctor: undefined,
      };
      const response = await axios.post(`${API_URL}/auth/add-user`, newUser);
      if (result.user) props.history.push("/isDoctor");
    } catch (err) {
      if (err.code) {
        switch (err.code) {
          case "auth/user-disabled":
            setError(err.message);
            break;
          case "auth/popup-closed-by-user":
            break;
          default:
            setError("Some Error Occured. Try Again Later");
        }
      } else if (err.response.data.message.includes("User already exists")) {
        axios
          .get(`${API_URL}/api/getUser/${user.uid}`)
          .then((res) => {
            if (res.data.isDoctor === undefined) {
              props.history.push("/isDoctor");
            } else if (res.data.isDoctor) {
              props.history.push("/doctor");
            } else if (!res.data.isDoctor) {
              props.history.push("/patient");
            }
          })
          .catch((err) => {
            console.log(err);
            setError(
              "Some error occured while logging in. Please try again later"
            );
          });
      } else {
        setError("Some error occured while logging in. Please try again later");
      }
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <div className="portLeft"></div>
      <div className="portDsgn">
        <Design1 dsgn="signup" />
      </div>
      <div className="portContainer">
        <div className="port">
          <h3>Dr. Chrome</h3>
          <p>Sign Up</p>
          <form onSubmit={handleSubmit}>
            {error && <Alert message={error} type="error" />}
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/signup2">
              <input type="submit" value="Next" />
            </Link>
          </form>
          <p>Or</p>
          <div className="googleSignContainer">
            <Link to="#" onClick={handleGoogleSignIn}>
              <img src={GoogleIcon} alt="Signin with Google" />
              <p>Sign in with Google</p>
            </Link>
          </div>
          <Link to="/signupDoctor">Signup as a Doctor</Link>
        </div>
      </div>
    </div>
  );
}
