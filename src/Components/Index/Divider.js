import Design1 from "./Designs/design";
import { useState } from 'react';

export default function Divider () {
    const [isDoctor, setIsDoctor] = useState(false);
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
                    <button>Continue <span className="material-icons">keyboard_arrow_right</span></button>
                </div>
            </div>
        </div>
    )
}
