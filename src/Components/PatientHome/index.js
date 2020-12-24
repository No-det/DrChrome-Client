import "./index.css";
import "../DoctorHome/index.css";
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";

import imageMain from "../../assets/patient-home.svg";
import DoctorCard from "./DoctorCard";

const PatientHome = () => {
  return (
    <div className="patient__container">
      <div className="patient__greeting">
        <div className="patient__header__left">
          <div className="patient__search">
            <input type="text" placeholder="Find Doctors" />
            <Icon icon={bxSearch} style={{ fontSize: "30px" }} />
          </div>
          <div className="patient__greetings">
            <div className="patient__greetings__left">
              <h3>
                Good Morning, <span>Raman</span>
              </h3>
              <p>Have a nice day!</p>
            </div>
            <div className="patient__greetings__right">
              <img src={imageMain} alt="Health" />
            </div>
          </div>
        </div>
        <div className="patient__header__mid">
          <div className="patient__appointment__history">
            <p>Appointment History</p>
          </div>
          <div className="patient__next__appointment">
            <h3>Your Next Appointment</h3>
            <p>22 December 2020</p>
            <p>11:00 - 11:30</p>
          </div>
        </div>
        <div className="patient__header__right">
          <div className="patient__dp">
            <img
              src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
              alt="Raman's DP"
            />
          </div>
          <p>Raman</p>
        </div>
      </div>
      <div className="patient__doctors">
        <h3>Doctors</h3>
        <div className="patient__doctors__cards">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </div>
  );
};

export default PatientHome;
