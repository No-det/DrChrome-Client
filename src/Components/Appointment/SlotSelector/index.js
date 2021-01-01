import "./index.css";
import { useState } from 'react';
import { weekday, getWeek, getMonth } from "./app";



export default function SlotSelector () {

    const [slotTime, setslotTime] = useState("Not Selected");
    const [slotDate, setslotDate] = useState(new Date());
    const [slotWeek, setslotWeek] = useState(getWeek());

    return <div className="slotSelector">
        <div className="monthSelector">
            <div className="monthSlot">{getMonth[slotWeek[3].getMonth()]}</div>
            <div className="slot-dtls">
                <p>{slotDate.getDate()} - {slotDate.getMonth() + 1} - {slotDate.getFullYear()}</p>
                <p>{slotTime}</p>
            </div>
            <button onClick={() => setslotDate(new Date())}>Back to Today</button>
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
                <div className="dayTimeBlock"><p className="timeBlock-available">--</p></div>
                <div className="dayTimeBlock"><p className="timeBlock-available">--</p></div>
                <div className="dayTimeBlock"><p className="timeBlock-available">--</p></div>
                <div className="dayTimeBlock"><p className="timeBlock-available">--</p></div>
                <div className="dayTimeBlock"><p className="timeBlock-available">--</p></div>
                <div className="dayTimeBlock"><p className="timeBlock-available">--</p></div>
            </div>
        </div>
    </div>
}
