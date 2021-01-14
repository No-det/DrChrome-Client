import "./index.css";
// import Slot from './Slot';
import AppoinmentForm from "./AppoinmentForm";
import SlotSelector from "./SlotSelector";
import {useEffect, useState} from "react";
import axios from "axios";

const Appointment = () => {

  const [doctor, setDoctor] = useState({});
  // eslint-disable-next-line
  useEffect(async () => {
    let res, id;
    id = window.location.pathname.split("/")[2];
    if (id)
    {
      res = await axios.get(`http://localhost:8000/api/getUser/${id}`)
      setDoctor(res.data);
      console.log(doctor)
    }
  }, [])

  return (
    <>
    {doctor ?
    <div className="apt">
      <div className="apt-docContainer">
        <div className="apt-docCard">
          <div className="apt-docCard-id">
            <img
              src={doctor.image}
              alt={doctor.name}
            />
            <div className="apt-docCard-id-txt">
              <h3 style={{ marginBottom: 15 }}>{doctor.name}</h3>
              <h4 style={{ marginBottom: 10 }}>{ doctor.hospital }</h4>
              <p>
                1221, Baker Street, Santa Claus, <br /> <br /> {doctor.city}
              </p>
            </div>
          </div>
          <div className="apt-docCard-dtls">
            <div className="apt-docCard-dtl">
              <p>Specialization</p>
              <p>{ doctor.specialization }</p>
            </div>
            <div className="apt-docCard-dtl">
              <p>Pricing</p>
              <p>${ doctor.pricing } / hr </p>
            </div>
            <div className="apt-docCard-dtl">
              <p>Total Appoinments</p>
              <p>{doctor?.appointments?.length}</p>
            </div>
            <div className="apt-docCard-dtl">
              <p>Years of Experience</p>
              <p>{ doctor.yearsOfExp } Yrs</p>
            </div>
          </div>
        </div>
        <div className="apt-slotSelector">
          <SlotSelector doctor={doctor} />
        </div>
      </div>
      <div className="apt-formContainer">
        <AppoinmentForm test=""/>
      </div>
    </div> : <></> }
    </>
  );
};

export default Appointment;
