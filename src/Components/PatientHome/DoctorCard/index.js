import "./index.css";
const DoctorCard = () => {
  return (
    <div className="doctors__card">
      <div className="doctors__card__left">
        <div className="doctors__card__dp">
          <img src="#" alt="Dr. Smith" />
        </div>
        <div className="doctors__card__brief">
          <h3>Dr. Smith</h3>
          <p>Pediatrician</p>
        </div>
      </div>
      <div className="doctors__card__right">
        <p>Unni's Hospital, New York</p>
        <table className="doctors__card__details">
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
        </table>
        <div className="doctors__card__appointment__button">
<<<<<<< HEAD:src/Components/PatientHome/DoctorCard/index.jsx
        // eslint-disable-next-line
          <a href="#">MAKE APPOINTMENT</a>
=======
          <a href="/">MAKE APPOINTMENT</a>
>>>>>>> 567c7dd4880b683c177bcad96d3c8d93541a7f43:src/Components/PatientHome/DoctorCard/index.js
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
