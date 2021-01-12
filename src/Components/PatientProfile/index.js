import "./index.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import FileCard from "./FileCard";
import { AuthContext } from "../../Contexts/Auth__Context";

const PatientProfile = () => {
  const { user } = useContext(AuthContext);
  const [nav, setNav] = useState(0);

  console.log(user);

  const changeNav = (id) => {
    setNav(id);
  };

  return (
    <div className="patientprofile__main">
      <h3>Patient Profile</h3>
      {user && (
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
                  <h4>{user.name}</h4>
                  <p>ajal@ajal.tech</p>
                </div>
                <div className="patientprofile__appointments">
                  <h4>
                    Appointments: <span>{(user.appointments && user.appointments.length !== 0) ? user.appointments.length : 0 }</span>
                  </h4>
                </div>
                <Link className="patientprofile__editprofile" to="/patientSetup">
                  Edit Profile
                </Link>
              </div>
              <div className="patientprofile__details">
                <div className="patientprofile__detail">
                  <h5>Gender</h5>
                  <p style={{textTransform: "capitalize"}}>{user?.gender}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Birthday</h5>
                  <p>{new Date(user?.dob).toDateString().slice(4, new Date(user?.dob).toDateString().length)}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Phone Number</h5>
                  <p>{user?.phone}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Street Address</h5>
                  <p>JK, San Tahome-45</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>City</h5>
                  <p>{user?.city}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Zip Code</h5>
                  <p>{user?.zip}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Registered Date</h5>
                  <p>{new Date(user?.joined).toDateString().slice(4, new Date(user?.joined).toDateString().length)}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Last Updated</h5>
                  <p>{new Date(user?.joined).toDateString().slice(4, new Date(user?.joined).toDateString().length)}</p>
                </div>
                <div className="patientprofile__detail">
                  <h5>Blood Group</h5>
                  <p style={{textTransform: "capitalize"}}>{user.blood}</p>
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
              {
                  (user.appointments && user.appointments.length !== 0) ? 
                    nav === 0 ?
                    user.appointments.map(appointment =>
                      appointment.status !== "pending" ? <AppointmentCard appointment={appointment} /> : null
                    ) :
                    user.appointments.map(appointment =>
                      appointment.status === "pending" ? <AppointmentCard appointment={appointment} /> : null
                    )
                  : null
                }
                {/* <AppointmentCard />
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
                <AppointmentCard /> */}
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
      )}
    </div>
  );
};

export default PatientProfile;
