import "./index.css";
import { useState, useEffect } from 'react';
import { weekday, getWeek, getMonth } from "./app";



export default function SlotSelector (props) {
    const [slotTime, setslotTime] = useState("Not Selected");
    const [slotDate, setslotDate] = useState(new Date());
    const slotWeek = getWeek();

    useEffect(() => {
        if (slotTime === "Not Selected")
            localStorage.setItem("slotTime", "invalid");
        else
            localStorage.setItem(
                "slotTime",
                new Date(`${getMonth[slotDate.getMonth()]} ${slotDate.getDate()}, ${slotDate.getFullYear()} ${slotTime}`)
            )
    }, [slotDate, slotTime])

    return <>
    { props.doctor.slots &&
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
            {
                [0, 1, 2, 3, 4, 5, 6].map(i =>
                    <div className="dayTimeBlock">
                        {
                            Object.keys(props.doctor.slots).map(slot => 
                                slot && props.doctor.slots[slot] ?
                                    <p 
                                        className={(slotDate.getDate() === slotWeek[i].getDate() && slotTime === slot.substring(0, 5)) ? "timeBlock-selected" : "timeBlock-available"} 
                                        onClick={() => {setslotTime(slot.substring(0, 5)); setslotDate(slotWeek[i]); } }
                                    >
                                            { slot.substring(0, 5) } hrs
                                    </p> 
                                :
                                    <p className="timeBlock-notAvailable" onClick={() => alert("Time Slot not Available")}>
                                        { slot.substring(0, 5) } hrs
                                    </p>
                            )
                        }
                    </div>
                )
            }
            </div>
        </div>
    </div>
    }
    </>
}
