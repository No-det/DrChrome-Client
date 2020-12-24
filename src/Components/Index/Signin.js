import "./index.css"

import Design1 from "./Designs/design";

export default function Signin () {
    return (
        <div className="signin">
            <div className="portLeft"></div>
            <div className="portDsgn"><Design1 dsgn="signin" /></div>
            <div className="portContainer">
                <div className="port">
                    <h3>Dr. Chrome</h3>
                    <p>Sign In</p>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter Email" />
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter Password" />
                        <input type="submit" value="Sign In" />
                    </form>
                </div>
            </div>
        </div>
    );
}
