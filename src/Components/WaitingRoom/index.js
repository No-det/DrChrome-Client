import { useState, useContext, useEffect } from 'react';
import './index.css';
import { Button } from 'antd'
import { AuthContext } from "../../Contexts/Auth__Context";
import { Link, withRouter } from 'react-router-dom';
import Loader from '../Loader';

const WaitingRoom = (props) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const [docId, setDocId] = useState("")
    const [patId, setPatId] = useState("")
    const [appointment, setAppointment] = useState({});
    const [error, setError] = useState(null);

    let nearest = 0, diff;
    useEffect( async () => {
        if (user && user.appointments && user.appointments.length !== 0)
            nearest = new Date(user.appointments[0].time) - new Date();
            user.appointments.map(appointment => {
                // diff = new Date(appointment.time) - new Date();
                // if (diff > 0 && nearest < 0) {
                //     setMeetId(appointment._id)
                //     nearest = diff;
                // }
                // if (diff < nearest && diff > 0) {
                //     setMeetId(appointment._id)
                //     nearest = diff;
                // }
                if (new Date(appointment.time).toLocaleDateString() === new Date().toLocaleDateString()) {
                    setDocId(appointment.doctorID);
                    setPatId(appointment.patientID);
                    setAppointment(appointment);
                }
                if (docId == "" && patId == "" && Object.keys(appointment).length !== 0)
                    setError("You have no meetings scheduled today.")
            });
    }, [user.appointments])

    useEffect(() => {
        if (docId.length > 1 && patId.length > 1) {
            setLoading(false);
            setError(null);
        }
    }, [docId, patId])

    return (
        user &&
        <div className="waitingRoom">
            <div className="app-time">
                {
                    error ?
                        <>
                            <p> { error } </p>
                            <p> 
                                Next Appoinment : &nbsp;
                                <b> { new Date(user.appointments[user.appointments.length - 1].time).toLocaleDateString() }, </b>&nbsp;
                                <b> { new Date(user.appointments[user.appointments.length - 1].time).toLocaleTimeString().substring(0, 5) } </b>
                            </p>
                        </>
                    :
                        <>
                            <p> { appointment.time } </p>
                        </>
                }
            </div>
            <Button loading={loading} type="primary"><Link to={{pathname: "/meeting", doc_id: docId, pat_id: patId}}>
                Enter Meeting
            </Link></Button>
        </div>
    );
}

export default withRouter(WaitingRoom);
