import { Link } from "react-router-dom";
import "./index.css";

const AppointmentCard = (props) => {
  let appStartTime = new Date(props.appointment.time);
  let appEndTime = new Date(appStartTime);
  appEndTime.setMinutes(appEndTime.getMinutes() + 30);
  return (
    <div className="patientprofile__appointmentsdetail">
      <div className="patientprofile__appointmenttime">
        <h5>{appStartTime.toDateString().slice(4, appStartTime.toDateString().length)}</h5>
        <p>
          {appStartTime.toLocaleTimeString().slice(0, appStartTime.toLocaleTimeString().length - 3)} - 
          {appEndTime.toLocaleTimeString().slice(0, appEndTime.toLocaleTimeString().length - 3)}
        </p>
      </div>
      <div className="patientprofile__type">Pediatrician</div>
      <div className="patientprofile__doctor">Dr. Smith</div>
      <div className="patientprofile__notes">
        <Link to="/">Notes</Link>
      </div>
    </div>
  );
};

export default AppointmentCard;
