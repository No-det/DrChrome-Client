import "./index.css";

import Design1 from "./Designs/design";
import { Link } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import queryString from "query-string";
export default function Signin(props) {
  useEffect(() => {
    const { token } = queryString.parse(props.location.search);
    if (token) {
      sessionStorage.setItem("token", token);
      props.history.push("/patient");
    }
  }, [props.location, props.history]);

  return (
    <div className="signin">
      <div className="portLeft"></div>
      <div className="portDsgn">
        <Design1 dsgn="signin" />
      </div>
      <div className="portContainer">
        <div className="port">
          <h3>Dr. Chrome</h3>
          <p>Sign In</p>
          <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter Email" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" />
            <Link to="/patient">
              <input type="submit" value="Sign In" />
            </Link>
          </form>
          <p>Or</p>
          <div className="googleSignContainer">
            <a href="http://localhost:8000/auth/google">
              <GoogleOutlined className="googleLogo" />
              <p>Sign in with google</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
