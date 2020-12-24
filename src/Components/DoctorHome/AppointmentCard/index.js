import "./index.css";

const AppointmentCard = () => {
  return (
    <div className="appCardMain">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
          alt="avatart"
          style={{ marginRight: 10 }}
        ></img>
        <p>Ajal</p>
      </div>
      <p>28/12/2020</p>
      <p>2:00 PM</p>
      <p>Accepted</p>
    </div>
  );
};

export default AppointmentCard;
