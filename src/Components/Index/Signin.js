import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Alert } from "antd";

import Design from "./Designs/design";
import { auth, signInWithGoogle } from "../../Firebase/firebase";
import { API_URL } from "../../utils/constants";

import { AuthContext } from "../../Contexts/Auth__Context";

import GoogleIcon from "../../assets/google.svg";
import "./index.css";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      if (result.user) {
        //
        //
        // !NEED TO MAKE IT EFFICIENT
        //
        //
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
      }
    } catch (err) {
      if (err.code) {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/wrong-password":
          case "auth/user-not-found":
            setError("Email and Password do not match");
            break;
          case "auth/user-disabled":
            setError("Email has been diabled");
            break;
          case "auth/popup-closed-by-user":
            break;
          default:
            setError("Some Error Occured. Try Again Later");
        }
      } else {
        setError("Some error occured while logging in. Please try again later");
      }
      console.log(err);
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
    <div className="signin">
      <div className="portLeft"></div>
      <div className="portDsgn">
        <Design dsgn="signin" />
      </div>
      <div className="portContainer">
        <div className="port">
          <h3>Dr. Chrome</h3>
          <p>Sign In</p>
          <form onSubmit={handleSubmit}>
            {error && <Alert message={error} type="error" showIcon />}
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
            <Link to="/patient">
              <input type="submit" value="Sign In" />
            </Link>
          </form>
          <p>Or</p>
          <div className="googleSignContainer">
            <Link to="#" onClick={handleGoogleSignIn}>
              <img src={GoogleIcon} alt="Signin with Google" />
              <p>Sign in with Google</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
