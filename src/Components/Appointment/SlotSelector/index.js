import "./index.css";

export default function SlotSelector () {
    return <div className="slotSelector">
        <div className="monthSelector">
            <select id="month" name="month" size="1" selected="June">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <button>Back to Today</button>
        </div>
        <div className="weekSelector">
            <div className="daySelector">
                <span className="material-icons">keyboard_arrow_left</span>
                <div className="dayBlocks">
                    <div className="dayBlock"><span>Mon</span><span>28</span></div>
                    <div className="dayBlock"><span>Tue</span><span>29</span></div>
                    <div className="dayBlock"><span>Wed</span><span>30</span></div>
                    <div className="dayBlock"><span>Thu</span><span>31</span></div>
                    <div className="dayBlock"><span>Fri</span><span>01</span></div>
                    <div className="dayBlock"><span>Sat</span><span>02</span></div>
                    <div className="dayBlock"><span>Sun</span><span>03</span></div>
                </div>
                <span className="material-icons">keyboard_arrow_right</span>
            </div>
            <div className="timeSelector">
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
                <div className="dayTimeBlock">
                    <p className="timeBlock-available">10:00 AM</p>
                    <p className="timeBlock-passed">06:00 AM</p>
                    <p className="timeBlock-selected">11:00 AM</p>
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
