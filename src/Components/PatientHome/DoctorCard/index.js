import "./index.css";
import {Link, withRouter} from "react-router-dom";
const DoctorCard = (props) => {
  return (
    <>
    { props.doctor &&
    <div className="doctors__card">
      <div className="doctors__card__left">
        <div className="doctors__card__dp">
          <img
            src= { props.doctor.image }
            alt= { props.doctor.name }
          />
        </div>
        <div className="doctors__card__brief">
          <h3>{ props.doctor.name }</h3>
          <p>Pediatrician</p>
        </div>
      </div>
      <div className="doctors__card__right">
        <p>Unni's Hospital, New York</p>
        <table className="doctors__card__details">
          <tbody>
            <tr>
              <td>Pricing</td>
              <td>: $60 / hr</td>
            </tr>
            <tr>
              <td>Available Time Slots</td>
              <td>: 10:00-12:00, 14:00-16:00</td>
            </tr>
            <tr>
              <td>Total Appointments</td>
              <td>: 74</td>
            </tr>
          </tbody>
        </table>
        <div className="doctors__card__appointment__button">
          {/* <Link to={{pathname: "/appointment", state: {id: props.doctor._id}}}>MAKE APPOINTMENT</Link> */}
          <a href={`/appointment/${props.doctor._id}`}>MAKE APPOINTMENT</a>
        </div>
      </div>
    </div> }
    </>
  );
};

// export default withRouter(DoctorCard);
export default DoctorCard;
