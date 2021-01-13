import { useEffect } from "react";
import "./index.css";


const DoctorCard = (props) => {
  // let slots = ["10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"]
  // let available = []
  // useEffect(() => {
  //   let start = "", end = "", count = 0;
  //   props.doctor.slots.map(slot => {

  //     if (slot && start === "") 
  //       start = slots[count].substring(0, 5);
  //     else if (slot === false && start !== "" && end === "")
  //       end = slots[count-1].substring(8, slots[count-1].length);
      
  //     if (end === "" && start !== "" && count === slots.length - 1)
  //       end = slots[slots.length - 1].substring(8, slots[slots.length - 1].length);
  //     if (start !== "" && end !== "") {
  //       available.push(start + " - " + end);
  //       start = ""; end = "";
  //     }

  //     count ++;
  //     console.log(count, start, end)
  //   })
  //   console.log(props.doctor.slots);
  //   console.log(available);
  // }, [props.doctor])
  return (
    <>
    { props.doctor &&
    <div className="doctors__card">
      <div className="doctors__card__left">
        <div className="doctors__card__dp">
          <img
            src= { props.doctor.image }
            alt= { props.doctor.name }
          />
        </div>
        <div className="doctors__card__brief">
          <h3>{ props.doctor.name }</h3>
          <p>{ props.doctor?.specialization }</p>
        </div>
      </div>
      <div className="doctors__card__right">
        <p>Unni's Hospital, New York</p>
        <table className="doctors__card__details">
          <tbody>
            <tr>
              <td>Pricing</td>
              <td>: ${ props.doctor.pricing ? props.doctor.pricing : 0} / hr</td>
            </tr>
            <tr>
              <td>Available Time Slots</td>
              <td style={{flexWrap: "wrap"}}>: 
                {
                  Object.keys(props.doctor.slots).map((key) => 
                    props.doctor.slots[key] ? <span> {key}, </span> : null
                  )
                }
              </td>
            </tr>
            <tr>
              <td>Total Appointments</td>
              <td>: { props.doctor.appointments ? props.doctor.appointments.length : 0 }</td>
            </tr>
          </tbody>
        </table>
        <div className="doctors__card__appointment__button">
          {/* <Link to={{pathname: "/appointment", state: {id: props.doctor._id}}}>MAKE APPOINTMENT</Link> */}
          <a href={`/appointment/${props.doctor._id}`}>MAKE APPOINTMENT</a>
        </div>
      </div>
    </div> }
    </>
  );
};

// export default withRouter(DoctorCard);
export default DoctorCard;
