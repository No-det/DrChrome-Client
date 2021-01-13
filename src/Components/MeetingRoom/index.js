import { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
// import Peer from "peer";
import Loader from '../Loader';
import axios from 'axios';
import './index.css';

const MeetingRoom = (props) => {
    const [loading, setLoading] = useState(true);
    const [doctor, setDoctor] = useState({});
    const [patient, setPatient] = useState({});
    // const [socket, setSocket] = useState(io.connect());
    const remoteVideo = useRef(null);
    const localVideo = useRef(null);
    let res, peer;

    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({video: true, audio: true});
    //     // peer = new Peer()
    //     // console.log(socket);
    //     // return () => {
    //     //     socket.emit('leave');
    //     // }
    // }, [])

    useEffect( async () => {
        if (props.location.doc_id.length > 1 && props.location.pat_id.length > 1) {
            console.log(props.location.doc_id);
            res = await axios.get(`http://localhost:8000/api/getUser/${props.location.doc_id}`);
            setDoctor(res.data);
            res = await axios.get(`http://localhost:8000/api/getUser/${props.location.pat_id}`);
            setPatient(res.data);
            console.log(Object.keys(patient).length === 0, doctor);
        }
    }, [props.location])

    useEffect(() => {
        if (Object.keys(patient).length !== 0 && Object.keys(doctor).length !== 0)
            setLoading(false)
    }, [doctor, patient])

    return (
        <>
            { loading ?
                <Loader />
            :
                <div className="meetingRoom">
                    <div className="part-dtls">
                        <div className="part-dtl">
                            <p> Dr. { doctor.name } </p>
                            <p> { doctor.specialization } </p>
                            <p> { doctor.hospital } </p>
                        </div>
                        <div className="part-dtl">
                            <p className="part-dtl-right"> { patient.name } </p>
                            <p className="part-dtl-right"> { patient.city } </p>
                            <p className="part-dtl-right"> { patient.blood } </p>
                        </div>
                    </div>
                    <div className="meet-video">
                        <video className="remote-video" autoPlay ref={remoteVideo}></video>
                        <video className="local-video" autoPlay muted ref={localVideo}></video>
                    </div>
                </div>
            }
        </>
    );
}

export default MeetingRoom;
