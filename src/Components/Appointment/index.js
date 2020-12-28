import "./index.css";
// import Slot from './Slot';
import AppoinmentForm from './AppoinmentForm';
import SlotSelector from './SlotSelector';

const Appointment = () => {
    return (
        <div className="apt">
            <div className="apt-docContainer">
                <div className="apt-docCard">
                    <div className="apt-docCard-id">
                        <img
                            src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                            alt="Dr. Smith"
                        />
                        <div className="apt-docCard-id-txt">
                            <h3>Dr. Unni Chekavar</h3>
                            <h4>Unni's Hospital, New York</h4>
                            <p>1221, Baker Street, Santa Claus, <br /> New York, New York</p>
                        </div>
                    </div>
                    <div className="apt-docCard-dtls">
                        <div className="apt-docCard-dtl">
                            <p>Specialization</p>
                            <p>Paediatrician</p>
                        </div>
                        <div className="apt-docCard-dtl">
                            <p>Pricing</p>
                            <p>$60 / hr </p>
                        </div>
                        <div className="apt-docCard-dtl">
                            <p>Total Appoinments</p>
                            <p>74</p>
                        </div>
                        <div className="apt-docCard-dtl">
                            <p>Years of Experience</p>
                            <p>5 Yrs</p>
                        </div>
                    </div>
                </div>
                <div className="apt-slotSelector">
                    <SlotSelector />
                </div>
            </div>
            <div className="apt-formContainer">
                <AppoinmentForm />
            </div>
        </div>
    );
};

export default Appointment;
