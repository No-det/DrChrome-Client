import "./index.css";
import { useState, useEffect } from 'react';
import { weekday, getWeek, getMonth } from "./app";



export default function SlotSelector (props) {
    const [slotTime, setslotTime] = useState("Not Selected");
    const [slotDate, setslotDate] = useState(new Date());
    const [loaded, setLoaded] = useState(false);
    const [appCount, setAppCount] = useState(0);
    const slotWeek = getWeek();
    let appTime, checkTime;

    useEffect(() => {
        if (slotTime === "Not Selected")
            localStorage.setItem("slotTime", "invalid");
        else
            localStorage.setItem(
                "slotTime",
                new Date(`${getMonth[slotDate.getMonth()]} ${slotDate.getDate()}, ${slotDate.getFullYear()} ${slotTime}`)
            )
        console.log(typeof({}))
    }, [slotDate, slotTime])

    useEffect(() => {
        // if (typeof(props.doctor.slots) === "object" && props.doctor.appointments && props.doctor.appointments.length !== 0)
        if (typeof(props.doctor.slots) === "object")
            setLoaded(true);
    }, [props.doctor.slots, props.doctor.appointments])

    return (
    props.doctor.slots ?
    <div className="slotSelector">
        <div className="monthSelector">
            <div className="monthSlot">{getMonth[slotDate.getMonth()]}</div>
            <div className="slot-dtls">
                <p>{slotDate.getDate()} - {slotDate.getMonth() + 1} - {slotDate.getFullYear()}</p>
                <p>{slotTime}</p>
            </div>
            <button onClick={() => {setslotDate(new Date()); setslotTime("Not Selected")}}>Back to Today</button>
        </div>
        <div className="weekSelector">
            <div className="daySelector">
                <div className="dayBlocks">
                    {
                        [0, 1, 2, 3, 4, 5, 6].map(i =>
                            <div
                                className={`dayBlock ${slotWeek[i].getDate() === slotDate.getDate() ? "selected" : "" }`}
                                onClick={() => setslotDate(slotWeek[i])}
                            >
                                <span>{ weekday(slotWeek[i].getDay()) }</span>
                                <span>{ slotWeek[i].getDate() }</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="timeSelector">
            {loaded ?
                [0, 1, 2, 3, 4, 5, 6].map(i =>
                    <div className="dayTimeBlock">
                        {
                            Object.keys(props.doctor.slots).map(slot => {
                            //     props.doctor.appointments.map(appointment => {
                            //         appTime = new Date(appointment.time);
                            //         checkTime = new Date(slotWeek[i]);
                            //         if (appTime.toLocaleDateString() === checkTime.toLocaleDateString() && appTime.getHours() === checkTime.getHours())
                            //             setAppCount(appCount + 1);
                            //     })
                            //     (appCount >= 4 && props.doctor.slots[slot]) ?
                                slot && props.doctor.slots[slot] ?
                                    <p 
                                        className={(slotDate.getDate() === slotWeek[i].getDate() && slotTime === slot.substring(0, 5)) ? "timeBlock-selected" : "timeBlock-available"} 
                                        onClick={() => {setslotTime(slot.substring(0, 5)); setslotDate(slotWeek[i]); } }
                                    >
                                            { slot.substring(0, 5) } hrs { console.log(slot.substring(0, 5))}
                                    </p> 
                                :
                                    <p className="timeBlock-notAvailable" onClick={() => alert("Time Slot not Available")}>
                                        { slot.substring(0, 5) } hrs
                                    </p>
                            })
                        }
                    </div>
                ) : null
            }
            </div>
        </div>
    </div> : <></>
    );
}
