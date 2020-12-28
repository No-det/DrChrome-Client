import { Link } from "react-router-dom";
import "./index.css";

const AppointmentCard = () => {
  return (
    <div className="patientprofile__appointmentsdetail">
      <div className="patientprofile__appointmenttime">
        <h5>15 January, 2021</h5>
        <p>9:00 - 9:30</p>
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
