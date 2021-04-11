import "./index.css";
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from "../../../Contexts/Auth__Context";
import { Link } from "react-router-dom";
let res, appTime;

const AppointmentCard = (props) => {
  const { changeUser } = useContext(AuthContext);
  const [patient, setPatient] = useState({})
  const [appointment, setAppointment] = useState();

  const handleAccept = async (toAccept) => {
    if (toAccept)
      if (window.confirm(`Are you sure you want to accept ${patient.name}'s appointment ?`)) {
        setAppointment({...appointment, isAccepted: true, isProcessed: true})
        res = await axios.post(`http://localhost:8000/api/updateApp/${props.user}`, {_id: appointment._id, isAccepted: true, isProcessed: true});
        changeUser(res.data.token);
      }
      else {
        setAppointment({...appointment, isProcessed: true})
        res = await axios.post(`http://localhost:8000/api/updateApp/${props.user}`, {_id: appointment._id, isAccepted: false, isProcessed: true});
        changeUser(res.data.token);
      }
    else
      if (window.confirm(`Are you sure you want to decline ${patient.name}'s appointment ?`)) {
        setAppointment({...appointment, isProcessed: true})
        res = await axios.post(`http://localhost:8000/api/updateApp/${props.user}`, {_id: appointment._id, isAccepted: false, isProcessed: true});
        changeUser(res.data.token);
      }
  }

  const getPatientData = async () => {
    setAppointment(props.appointment);
    res = await axios.get(`http://localhost:8000/api/getUser/${props.appointment.patientID}`);
    setPatient(res.data);
    appTime = new Date(props.appointment.time);
  }

  useEffect(() => {
    getPatientData();
  }, [])

  return (
    <>
    {(patient && appointment && appTime) &&
    <div className="appCardMain">
      <div className="appCard-profile">
        <Link to="/profile">
          <img
            src={patient.image}
            alt={patient.name}
            style={{ marginRight: 10 }}
          ></img>
          <p>{patient.name}</p>
        </Link>
      </div>
      <p>{appTime.toDateString().slice(4, appTime.toDateString().length)}</p>
      <p>{appTime.toLocaleTimeString().slice(0, appTime.toLocaleTimeString().length - 3)}</p>
      { appointment.isProcessed ?
          appointment.isAccepted ?
            <span className="material-icons appCard-done">done</span>
          :
            <span className="material-icons appCard-notDone">clear</span>
        :
          <div className="appCard-accept">
            <span className="material-icons appCard-done" onClick={() => handleAccept(true)}>done</span>
            <span className="material-icons appCard-notDone" onClick={() => handleAccept(false)}>clear</span>
          </div>
      }
    </div> }
    </>
  );
};

export default AppointmentCard;
