import "./index.css";
import { useState, useEffect } from 'react';
import { weekday, getWeek } from "./app";



export default function SlotSelector () {

    let date = new Date();

    const [slotTime, setslotTime] = useState(0);
    const [slotDay, setslotDay] = useState(date.getDate());
    const [slotMonth, setslotMonth] = useState(date.getMonth() + 1);
    const [slotYear, setslotYear] = useState(date.getFullYear());
    const [slotWeek, setslotWeek] = useState(getWeek(date));

    useEffect(() => {
        // setslotWeek(getWeek(`${slotYear}-${slotMonth}-`));
        return () => {
            // 
        }
    }, [])

    return <div className="slotSelector">
        <div className="monthSelector">
            <select 
                size="1" 
                value={slotWeek[3].getMonth() + 1} 
                onChange={(e) => setslotWeek(getWeek(`${slotWeek[3].getFullYear()}-${e.target.value}-${slotWeek[3].getDate()}`))}
            >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <p>{slotWeek[3].getDate()} / {slotWeek[3].getMonth() + 1} / {slotWeek[3].getFullYear()} == {slotTime}</p>
            <button>Back to Today</button>
        </div>
        <div className="weekSelector">
            <div className="daySelector">
                <span 
                    className="material-icons" 
                    onClick={() => setslotWeek(getWeek(slotWeek[3].setDate(slotWeek[3].getDate() - 6)))}
                >
                    keyboard_arrow_left
                </span>
                <div className="dayBlocks">
                    <div className="dayBlock" onClick={() => setslotWeek(getWeek(slotWeek[0]))}>
                        <span>{weekday(slotWeek[0].getDay())}</span>
                        <span>{slotWeek[0].getDate()}</span>
                    </div>
                    <div className="dayBlock" onClick={() => setslotWeek(getWeek(slotWeek[1]))}>
                        <span>{weekday(slotWeek[1].getDay())}</span>
                        <span>{slotWeek[1].getDate()}</span>
                    </div>
                    <div className="dayBlock" onClick={() => setslotWeek(getWeek(slotWeek[2]))}>
                        <span>{weekday(slotWeek[2].getDay())}</span>
                        <span>{slotWeek[2].getDate()}</span>
                    </div>
                    <div className="dayBlock selected" onClick={() => setslotWeek(getWeek(slotWeek[3]))}>
                        <span>{weekday(slotWeek[3].getDay())}</span>
                        <span>{slotWeek[3].getDate()}</span>
                    </div>
                    <div className="dayBlock" onClick={() => setslotWeek(getWeek(slotWeek[4]))}>
                        <span>{weekday(slotWeek[4].getDay())}</span>
                        <span>{slotWeek[4].getDate()}</span>
                    </div>
                    <div className="dayBlock" onClick={() => setslotWeek(getWeek(slotWeek[5]))}>
                        <span>{weekday(slotWeek[5].getDay())}</span>
                        <span>{slotWeek[5].getDate()}</span>
                    </div>
                    <div className="dayBlock" onClick={() => setslotWeek(getWeek(slotWeek[6]))}>
                        <span>{weekday(slotWeek[6].getDay())}</span>
                        <span>{slotWeek[6].getDate()}</span>
                    </div>
                </div>
                <span 
                    className="material-icons"
                    onClick={() => setslotWeek(getWeek(slotWeek[3].setDate(slotWeek[3].getDate() + 6)))}
                >
                    keyboard_arrow_right
                </span>
            </div>
            <div className="timeSelector">
                <div className="dayTimeBlock">
                    <p className="timeBlock-available" onClick={() => setslotTime('10:00 AM')}>10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available" onClick={() => setslotTime('12:00 AM')}>12:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available" onClick={() => setslotTime('02:00 PM')}>2:00 PM</p>
                </div>
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                </div>
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                </div>
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available">11:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                </div>
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                </div>
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                </div>
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-notAvailable">09:00 AM</p>
                    <p className="timeBlock-available">10:00 AM</p>
                </div>
            </div>
        </div>
    </div>
}
