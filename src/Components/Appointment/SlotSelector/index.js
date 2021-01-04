import "./index.css";
import { useState, useEffect } from 'react';
import { weekday, getWeek, getMonth } from "./app";



export default function SlotSelector () {

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

    return <div className="slotSelector">
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
                    <div 
                        className={`dayBlock ${slotWeek[0].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[0])}
                    >
                        <span>{weekday(slotWeek[0].getDay())}</span>
                        <span>{slotWeek[0].getDate()}</span>
                    </div>
                    <div 
                        className={`dayBlock ${slotWeek[1].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[1]) 
                    }>
                        <span>{weekday(slotWeek[1].getDay())}</span>
                        <span>{slotWeek[1].getDate()}</span>
                    </div>
                    <div 
                        className={`dayBlock ${slotWeek[2].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[2]) 
                    }>
                        <span>{weekday(slotWeek[2].getDay())}</span>
                        <span>{slotWeek[2].getDate()}</span>
                    </div>
                    <div 
                        className={`dayBlock ${slotWeek[3].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[3]) 
                    }>
                        <span>{weekday(slotWeek[3].getDay())}</span>
                        <span>{slotWeek[3].getDate()}</span>
                    </div>
                    <div 
                        className={`dayBlock ${slotWeek[4].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[4]) 
                    }>
                        <span>{weekday(slotWeek[4].getDay())}</span>
                        <span>{slotWeek[4].getDate()}</span>
                    </div>
                    <div 
                        className={`dayBlock ${slotWeek[5].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[5]) 
                    }>
                        <span>{weekday(slotWeek[5].getDay())}</span>
                        <span>{slotWeek[5].getDate()}</span>
                    </div>
                    <div 
                        className={`dayBlock ${slotWeek[6].getDate() === slotDate.getDate() ? "selected" : "" }`} 
                        onClick={() => setslotDate(slotWeek[6]) 
                    }>
                        <span>{weekday(slotWeek[6].getDay())}</span>
                        <span>{slotWeek[6].getDate()}</span>
                    </div>
                </div>
            </div>
            <div className="timeSelector">


                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[0].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[0]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[0].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[0]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[0].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[0]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>



                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[1].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[1]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[1].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[1]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[1].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[1]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>
    


                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[2].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[2]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[2].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[2]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[2].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[2]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>



                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[3].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[3]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[3].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[3]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[3].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[3]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>



                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[4].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[4]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[4].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[4]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[4].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[4]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>



                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[5].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[5]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[5].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[5]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[5].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[5]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>



                <div className="dayTimeBlock">
                    <p 
                        className={(slotDate.getDate() === slotWeek[6].getDate() && slotTime === "10:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('10:00 AM'); setslotDate(slotWeek[6]); } }
                    >
                            10:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[6].getDate() && slotTime === "11:00 AM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('11:00 AM'); setslotDate(slotWeek[6]); } }
                    >
                            11:00 AM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            12:00 AM
                    </p>
                    <p 
                        className={(slotDate.getDate() === slotWeek[6].getDate() && slotTime === "01:00 PM") ? "timeBlock-selected" : "timeBlock-available"} 
                        onClick={() => {setslotTime('01:00 PM'); setslotDate(slotWeek[6]); } }
                    >
                            01:00 PM
                    </p>
                    <p 
                        className="timeBlock-notAvailable"
                        onClick={() => alert("Time Slot not Available")}
                    >
                            02:00 AM
                    </p>
                </div>


                
            </div>
        </div>
    </div>
}
