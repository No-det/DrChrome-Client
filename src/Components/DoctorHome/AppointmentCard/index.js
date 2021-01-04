import "./index.css";
import {useState, useEffect} from 'react';
import axios from 'axios';

let doctor, res, appTime;

const AppointmentCard = (props) => {
  useEffect(async () => {
    res = await axios.get(`http://localhost:8000/api/getUser/${props.appointment.doctorID}`);
    doctor = res.data;
    appTime = new Date(props.appointment.time);
  }, [])
  return (
    <>
    {doctor &&
    <div className="appCardMain">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          // src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
          src={doctor.image}
          alt={doctor.name}
          style={{ marginRight: 10 }}
        ></img>
        <p>{doctor.name}</p>
      </div>
      <p>{appTime.toDateString().slice(4, appTime.toDateString().length)}</p>
      <p>{appTime.toLocaleTimeString().slice(0, appTime.toLocaleTimeString().length - 3)}</p>
      <p>Accepted</p>
    </div> }
    </>
  );
};

export default AppointmentCard;
