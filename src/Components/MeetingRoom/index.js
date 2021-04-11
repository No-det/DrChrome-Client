import { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
// import Peer from "peer";
import { Redirect } from "react-router-dom";
import Loader from '../Loader';
import axios from 'axios';
import './index.css';

const MeetingRoom = (props) => {
    const [loading, setLoading] = useState(true);
    const [doctor, setDoctor] = useState({});
    const [patient, setPatient] = useState({});
    // const [socket, setSocket] = useState(io.connect());
    const [isCamOn, setIsCamOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isHangedUp, setIsHangedUp] = useState(false)
    const remoteVideo = useRef(null);
    const localVideo = useRef(null);
    let res;

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true});
    //     // peer = new Peer()
    //     // console.log(socket);
        return () => {
            // socket.emit('leave');
            navigator.mediaDevices.getUserMedia({video: false, audio: false});
        }
    }, [])

    const getDocPatData = async () => {
        if (props.location.doc_id.length > 1 && props.location.pat_id.length > 1) {
            console.log(props.location.doc_id);
            res = await axios.get(`http://localhost:8000/api/getUser/${props.location.doc_id}`);
            setDoctor(res.data);
            res = await axios.get(`http://localhost:8000/api/getUser/${props.location.pat_id}`);
            setPatient(res.data);
            console.log(Object.keys(patient).length === 0, doctor);
        }
    }

    useEffect(() => {
        getDocPatData();
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
                    <div className="meetingRoom-videoContainer">
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
                        <div className="meet-video-loading">
                            <div className="meet-video-loader"></div>
                            <p>Connecting . . .</p>
                        </div>
                        <div className="meet-video-controls">
                            {
                                isFullScreen ? 
                                    <span className="material-icons video-controls-bright" onClick={() => setIsFullScreen(false)}>fullscreen</span>
                                :
                                    <span className="material-icons video-controls-dim" onClick={() => setIsFullScreen(true)}>fullscreen_exit</span>
                            }
                            {
                                isMicOn ?
                                    <span className="material-icons video-controls-dim" onClick={() => setIsMicOn(false)}>mic</span>
                                :
                                    <span className="material-icons video-controls-bright" onClick={() => setIsMicOn(true)}>mic_off</span>
                            }
                            <span className="material-icons video-controls-bright" onClick={() => setIsHangedUp(true)}>call_end</span>
                            {
                                isCamOn ?
                                    <span className="material-icons video-controls-dim" onClick={() => setIsCamOn(false)}>videocam</span>
                                :
                                    <span className="material-icons video-controls-bright" onClick={() => setIsCamOn(true)}>videocam_off</span>
                            }
                            <span className="material-icons video-controls-dim">settings</span>
                        </div>
                    </div>
                    </div>
                    <div className="meetingRoom-chatContainer"></div>
                    { isHangedUp ? <Redirect to="/patient" /> : null }
                </div>
            }
        </>
    );
}

export default MeetingRoom;
