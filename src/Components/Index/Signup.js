import { Alert } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import { API_URL } from "../../utils/constants";

import Design1 from "./Designs/design";
import "./index.css";

export default function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
          <Link to="/signupDoctor">Signup as a Doctor</Link>
        </div>
      </div>
    </div>
  );
}
