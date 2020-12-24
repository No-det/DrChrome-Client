import "./index.css";

import Design1 from "./Designs/design";
import { Link } from "react-router-dom";

export default function Signup() {
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
          <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter Email" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" />
            <Link to="/doctor">
              <input type="submit" value="Sign Up" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
