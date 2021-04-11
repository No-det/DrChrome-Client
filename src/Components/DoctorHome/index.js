import "./index.css";
import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";
import AppointmentCard from "./AppointmentCard";
import StatsCircle from "./StatsCircle";
import { AuthContext } from "../../Contexts/Auth__Context";
import { Link } from "react-router-dom";
// import axios from "axios";

const DoctorHome = () => {
  // const [userData, setUserData] = useState(null);
  const [consulted, setConsulted] = useState(0);
  const [cancelled, setCancelled] = useState(0);
  const [upcoming, setUpcoming] = useState(0);
  const [total, setTotal] = useState(0);
  const { user, userData } = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(userData).length === 0)
      setTotal(userData.appointments.length);
      userData.appointments.forEach(appointment => {
        if (appointment.isProcessed) {
          if (appointment.isAccepted)
            if (appointment.isDone) setConsulted(consulted + 1)
            else setUpcoming(upcoming + 1)
          else setCancelled(cancelled + 1)
        }
      })
  }, [userData]);

  return <div className="doc_main">
      {console.log(Object.keys(userData).length === 0)}
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
              Good Morning,
              <Link to="/profile">
                <em>Dr. {userData.name}</em>
              </Link>
            </p>
            <p style={{ fontWeight: 400 }}>Have a good day at work!</p>
          </div>
          <div className="totAppBtn">
            <p>Total Appointments</p>
            <p>{userData.appointments ? userData.appointments.length : 0}</p>
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
            {userData.appointments ? (
              userData.appointments.map((appointment) =>
                appointment.isDone ? (
                  <AppointmentCard appointment={appointment} user={user.uid} />
                ) : null
              )
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
      </div>
      <div className="docRight">
        <div className="docDetails">
          <Link>
            <p>Dr. {userData.name}</p>
            <img src={userData.image} alt={userData.name} style={{ marginRight: 10 }} />
          </Link>
        </div>
        <div className="lastReport">
          <h2>Last day's report</h2>
          <StatsCircle
            total={total}
            consulted={consulted}
            upcoming={upcoming}
          />
        </div>
        <div className="lastReport">
          <h2>Monthly report</h2>
          <StatsCircle
            total={total}
            consulted={consulted}
            upcoming={upcoming}
          />
        </div>
      </div>
    </div>
};

export default DoctorHome;
