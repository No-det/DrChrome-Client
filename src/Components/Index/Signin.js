import "./index.css";

import Design from "./Designs/design";
import { Link } from "react-router-dom";
// import { GoogleOutlined } from "@ant-design/icons";
import { useContext, useEffect } from "react";
import queryString from "query-string";
import { AuthContext } from "../../Contexts/Auth__Context";
import GoogleIcon from "../../assets/google.svg";

export default function Signin(props) {

  const { user, changeUser } = useContext(AuthContext);

  useEffect(() => {
    const { token } = queryString.parse(props.location.search);
    if (token) {
      changeUser(token);
      if (user)
        user.isDoctor
          ? props.history.push("/doctor")
          : props.history.push("/patient");
    }
    // eslint-disable-next-line
  }, [props.location, props.history]);

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
              <img src={GoogleIcon} alt="Signin with Google" />
              {/* <GoogleOutlined className="googleLogo" /> */}
              <p>Sign in with Google</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
