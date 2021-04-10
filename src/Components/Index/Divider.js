import Design1 from "./Designs/design";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../Contexts/Auth__Context";
import { API_URL } from "../../utils/constants";

export default function Divider(props) {
  const { user } = useContext(AuthContext);
  const [isDoctor, setIsDoctor] = useState(false);

  const onFinish = async (val) => {
    const url = `${API_URL}/api/isDoctor/${user.uid}`;
    const response = await axios.post(url, {
      isDoctor: val,
    });
    if (response.statusText === "OK") {
      isDoctor ? props.history.push("/doctor") : props.history.push("/patient");
    }
  };

  return (
    <div className="divider">
      <div className="portLeft"></div>
      <div className="portDsgn">
        <Design1 dsgn="signin" />
      </div>
      <div className="portContainer">
        <div className="portDiv">
          <h3>Are you a doctor ?</h3>
          <div className="port-divider">
            <p
              onClick={() => setIsDoctor(true)}
              className={isDoctor ? `port-divider-active` : ``}
            >
              Yes
            </p>
            <p
              onClick={() => setIsDoctor(false)}
              className={isDoctor ? `` : `port-divider-active`}
            >
              No
            </p>
          </div>
          <button onClick={() => onFinish(isDoctor)}>
            Continue
            <span className="material-icons">keyboard_arrow_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
