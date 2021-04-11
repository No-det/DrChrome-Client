import "./index.css";
import "../DoctorHome/index.css";
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";

import imageMain from "../../assets/patient-home.svg";
import DoctorCard from "./DoctorCard";
import { AuthContext } from "../../Contexts/Auth__Context";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const PatientHome = (props) => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [doctors, setDoctors] = useState([]);
  let nextApp, nextAppEnd;

  useEffect(() => {
    getUserData();
    getAllDoctors();
  }, []);

  const getUserData = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/getUser/${user.uid}`
    );
    setUserData(response.data);
    console.log(response.data);
    if (response.data.upcomingApps && response.data.upcomingApps.length !== 0)
    {
      nextApp = new Date(response.data.upcomingApps[0].time)
      console.log(new Date(response.data.upcomingApps[0].time))
      nextAppEnd = new Date(nextApp);
      nextAppEnd.setMinutes(nextApp.getMinutes() + 30);
    }
  };

  const getAllDoctors = async () => {
    let res = await axios.get("http://localhost:8000/api/getDoctors");
    setDoctors(res.data);
  }

  return (
    user && userData && 
    <>
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
                Good Morning, <Link to="/profile/">{ userData.name }</Link>
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
          {userData && userData.isVerified ? (
            <div className="patient__next__appointment">
              { nextApp ?
                <>
                <h3>Your Next Appointment</h3>
                <p>{nextApp.toDateString().slice(4, nextApp.toDateString().length)}</p>
                <p>
                  {nextApp.toLocaleTimeString().slice(0, nextApp.toLocaleTimeString().length - 3)} - {nextAppEnd.toLocaleTimeString().slice(0, nextAppEnd.toLocaleTimeString().length - 3)}
                </p>
                </>
              :
              <p>No Appoinments</p>
}
            </div>
          ) : (
            <div className="patient__next__appointment">
              <h3>Verify your details to make appointment</h3>
            </div>
          )}
        </div>
        <div className="patient__header__right">
          <div className="patient__dp">
            <img
              src={userData.image}
              alt={`${userData.name}'s DP`}
            />
          </div>
          <Link to="/profile">{userData.name}</Link>
        </div>
      </div>
      <div className="patient__doctors">
        <h3>Doctors</h3>
        <div className="patient__doctors__cards">
          { 
            doctors ? doctors.map(doctor =>
              <DoctorCard doctor={doctor} />
            ) 
              : null 
          }
          {/* <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard /> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientHome;
