import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import FileCard from "./FileCard";

const PatientProfile = () => {
  const [nav, setNav] = useState(0);

  const changeNav = (id) => {
    setNav(id);
  };

  return (
    <div className="patientprofile__main">
      <h3>Patient Profile</h3>
      <div className="patientprofile__container">
        <div className="patientprofile__left">
          <div className="patientprofile__top">
            <div className="patientprofile__briefdetails">
              <div className="patientprofile__image">
                <img
                  src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                  alt="DP"
                />
              </div>
              <div className="patientprofile__name">
                <h4>Frank Morris</h4>
                <p>frankmorris@nodet.com</p>
              </div>
              <div className="patientprofile__appointments">
                <h4>
                  Appointments: <span>2</span>
                </h4>
              </div>
              <Link className="patientprofile__editprofile" to="/">
                Edit Profile
              </Link>
            </div>
            <div className="patientprofile__details">
              <div className="patientprofile__detail">
                <h5>Gender</h5>
                <p>Male</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Birthday</h5>
                <p>3rd December 1999</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Phone Number</h5>
                <p>(888) - 8888 888</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Street Address</h5>
                <p>JK, San Tahome-45</p>
              </div>
              <div className="patientprofile__detail">
                <h5>City</h5>
                <p>San Deigo</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Zip Code</h5>
                <p>888888</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Registered Date</h5>
                <p>23 December, 2020</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Last Updated</h5>
                <p>24 December, 2020</p>
              </div>
              <div className="patientprofile__detail">
                <h5>Blood Group</h5>
                <p>A +ve</p>
              </div>
            </div>
          </div>
          <div className="patientprofile__bottom">
            <div className="patientprofile__nav">
              <span
                onClick={() => changeNav(0)}
                className={nav === 0 ? "pp__active" : null}
              >
                Previous Appointment
              </span>
              <span
                onClick={() => changeNav(1)}
                className={nav === 1 ? "pp__active" : null}
              >
                Upcoming Appointment
              </span>
            </div>
            <div className="patientprofile__appointmentsdetails">
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
            </div>
          </div>
        </div>
        <div className="patientprofile__right">
          <h5>Files/Document</h5>
          <div className="patientprofile__files">
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
