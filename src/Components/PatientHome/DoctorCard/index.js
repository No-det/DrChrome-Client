import "./index.css";
const DoctorCard = () => {
  return (
    <div className="doctors__card">
      <div className="doctors__card__left">
        <div className="doctors__card__dp">
          <img
            src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
            alt="Dr. Smith"
          />
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
<<<<<<< HEAD
          <a href="/">MAKE APPOINTMENT</a>
=======
          <a href="#">MAKE APPOINTMENT</a>
>>>>>>> c9cf9bbf647a58478c5501a5f7560061a2225385
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
