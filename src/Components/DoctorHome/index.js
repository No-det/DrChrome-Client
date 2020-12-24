import "./index.css";
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";
import AppointmentCard from "./AppointmentCard";
import StatsCircle from "./StatsCircle";

const DoctorHome = () => {
  return (
    <div className="doc_main">
      <div className="docLeft">
        <div className="docLeft-1">
          <div className="doc_search">
            <input type="text" placeholder="Seach for patients" />
            <Icon
              icon={bxSearch}
              style={{ fontSize: "30px" }}
              className="searchIcon"
            />
          </div>
          <div className="appHisBtn">Appointment History</div>
        </div>
        <div className="docLeft-2">
          <div className="greetingCard">
            <p>
              Good Morning, <em>Dr. Appukuttan</em>
            </p>
            <p style={{ fontWeight: 400 }}>Have a good day at work!</p>
          </div>
          <div className="totAppBtn">
            <p>Total Appointments</p>
            <p>97</p>
          </div>
        </div>
        <div className="docLeft-3">
          <div className="appContainer">
            <h1>Appointments</h1>
            <div className="tableHeader">
              <p>Name</p>
              <p>Date</p>
              <p>Time</p>
              <p>Status</p>
            </div>
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
          </div>
        </div>
      </div>
      <div className="docRight">
        <div className="docDetails">
          <p>Dr. Appukuttan</p>
          <img
            src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
            alt="avatart"
            style={{ marginRight: 10 }}
          />
        </div>
        <div className="lastReport">
          <h2>Last day's report</h2>
          <StatsCircle />
        </div>
        <div className="lastReport">
          <h2>Monthly report</h2>
          <StatsCircle />
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
