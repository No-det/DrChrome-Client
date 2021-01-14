import Loader from "../../Loader";
import "./index.css";

const ParticipantCard = props => {

    return (
        props.doctor ?
        props.doctor &&
        <div className="ppt-card">
            <div className="ppt-card-head">
                <img src={props.doctor.image} alt={props.doctor.name} />
                <div className="ppt-card-head-data">
                    <p> { props.doctor.name } </p>
                    <p> { props.doctor.hospital } </p>
                </div>
            </div>
            <div className="ppt-card-body">
                <p> Specialization &nbsp; : &nbsp; <b>{ props.doctor.specialization }</b> </p>
                <p> Years of Experience &nbsp; : &nbsp; <b>{ props.doctor.yearsOfExp }</b> </p>
                <p> Pricing &nbsp; : &nbsp; <b>{ props.doctor.pricing }</b> </p>
            </div>
        </div>
        : props.patient ?
            props.patient &&
            <div className="ppt-card">
                <div className="ppt-card-head">
                    <img src={props.patient.image} alt={props.patient.name} />
                    <div className="ppt-card-head-data">
                        <p> { props.patient.name } </p>
                        <p> { props.patient.phone }, { props.patient.city } </p>
                    </div>
                </div>
                <div className="ppt-card-body">
                    <p> Symptoms &nbsp; : &nbsp; <b>{ props.appointment.symptoms }</b> </p>
                    <p> Gender &nbsp; : &nbsp; <b style={{textTransform: "capitalize"}}>{ props.patient.gender }</b> </p>
                    <p> Date of Birth &nbsp; : &nbsp; <b>{ props.patient.dob }</b> </p>
                </div>
            </div>
        : <Loader />
    );
}

export default ParticipantCard;
