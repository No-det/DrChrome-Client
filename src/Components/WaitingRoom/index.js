import { useState, useContext, useEffect } from 'react';
import './index.css';
import { Button } from 'antd'
import { AuthContext } from "../../Contexts/Auth__Context";
import { Link, withRouter } from 'react-router-dom';
// import Loader from '../Loader';
import axios from 'axios';
import ParticipantCard from './ParticipantCard';
import Loader from '../Loader';

const WaitingRoom = (props) => {
    const { user } = useContext(AuthContext);
    const [remoteUser, setRemoteUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [docId, setDocId] = useState("")
    const [patId, setPatId] = useState("")
    const [appointment, setAppointment] = useState({});
    const [error, setError] = useState(null);
    let res;

    useEffect( async () => {
        if (user && user.upcomingApps && user.upcomingApps.length !== 0) {
            setAppointment(user.upcomingApps[0]);
            setDocId(user.upcomingApps[0].doctorID);
            setPatId(user.upcomingApps[0].patientID);
            if (user._id === appointment.patientID) {
                res = await axios.get(`http://localhost:8000/api/getUser/${appointment.doctorID}`);
                setRemoteUser(res.data);
            }
            else {
                res = await axios.get(`http://localhost:8000/api/getUser/${appointment.patientID}`);
                setRemoteUser(res.data);
            }
            if (docId === "" && patId === "" && Object.keys(appointment).length === 0)
                setError("You have no meetings scheduled today.")
        }
    }, [user.appointments])

    useEffect(() => {
        if (user) {
            // if ( user && appointment && remoteUser) {
            setLoading(false);
            setError(null);
        }
    }, [remoteUser])

    return (
        // loading ? <Loader /> :
        (user && remoteUser) &&
        <div className="waitingRoom">
            {
                error ?
                    <>
                        <div className="app-time">
                            <p className="app-time-error"> { error } </p>
                            <p> 
                                Next Appoinment : &nbsp;
                                <b> { new Date(user.upcomingApps[0].time).toLocaleDateString() }, </b>&nbsp;
                                <b> { new Date(user.upcomingApps[0].time).toLocaleTimeString().substring(0, 5) } </b>
                            </p>
                        </div>
                        <Button type="primary" disabled><Link to={{pathname: "/meeting", doc_id: docId, pat_id: patId}}>
                            Enter Meeting
                        </Link></Button>
                    </>
                :
                    <>
                        <div className="app-part-dtls">
                            {
                                user.isDoctor ?
                                    <>
                                        <ParticipantCard doctor={user} />
                                        <ParticipantCard patient={remoteUser} appointment={appointment} />
                                    </>
                                :
                                    <>
                                        <ParticipantCard patient={user} appointment={appointment} />
                                        <ParticipantCard doctor={remoteUser} />
                                    </>
                            }
                        </div>
                        <div className="app-time">
                            <p> Date &nbsp; : &nbsp; <b> { new Date(appointment.time).toLocaleDateString().replaceAll("/", " - ") } </b></p>
                            <p> Time &nbsp; : &nbsp; <b> { new Date(appointment.time).toLocaleTimeString().substring(0, 5) } </b> hrs</p>
                        </div>
                        <Button loading={loading} type="primary"><Link to={{pathname: "/meeting", doc_id: docId, pat_id: patId}}>
                            Enter Meeting
                        </Link></Button>
                    </>
            }
        </div>
    );
}

export default withRouter(WaitingRoom);
