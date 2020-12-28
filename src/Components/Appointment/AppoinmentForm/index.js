import "./index.css";

export default function AppointmentForm () {
    return (
        <div className="apt-form">
            <h3>Appointment Form</h3>
            <label>What is the reason for your appointment ?</label><br />
            <textarea></textarea><br /><br />
            <label>Symptoms (if any)</label><br />
            <textarea></textarea><br /><br />
            <label>Attach Documents (if any)</label><br />
            <input type="file" />
        </div>
    );
}

// 414227024002-7msf4kdntm638jgr2uccptmrb3s2kc23.apps.googleusercontent.com
// z9GSp8u6a46WbigqybKyF-gW