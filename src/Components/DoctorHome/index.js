import "./index.css";
import { useContext, useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import bxSearch from "@iconify/icons-bx/bx-search";
import AppointmentCard from "./AppointmentCard";
import StatsCircle from "./StatsCircle";
import { AuthContext } from "../../Contexts/Auth__Context";
import Loader from '../Loader';

const DoctorHome = () => {
  const { user } = useContext(AuthContext);
  const [consulted, setConsulted] = useState(0);
  const [pending, setPending] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.appointments) {
      user.appointments.map(appointment => {
        setTotal(total + 1);
        if (appointment.isProcessed) 
          if (appointment.isAccepted)
            if (appointment.isDone) setConsulted(consulted + 1)
            else setPending(pending + 1)
      });
      setLoading(false);
    }
  }, [user.appointments])

  return (
    loading ? <Loader /> :
    <div className="doc_main"> {console.log(consulted, pending, total)}
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
              Good Morning, <em>Dr. {user.name}</em>
            </p>
            <p style={{ fontWeight: 400 }}>Have a good day at work!</p>
          </div>
          <div className="totAppBtn">
            <p>Total Appointments</p>
            <p>{user.appointments ? user.appointments.length : 0}</p>
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
              {
                user.appointments ?
                user.appointments.map(appointment =>
                  appointment.isDone ?
                    <AppointmentCard appointment={appointment} user={user._id} />
                  : null
                ) : <p>loading...</p>
              }
          </div>
        </div>
      </div>
      <div className="docRight">
        <div className="docDetails">
          <p>Dr. {user.name}</p>
          <img
            // src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
            src={user.image}
            alt={user.name}
            style={{ marginRight: 10 }}
          />
        </div>
        <div className="lastReport">
          <h2>Last day's report</h2>
          <StatsCircle consulted={consulted} pending={pending} />
        </div>
        <div className="lastReport">
          <h2>Monthly report</h2>
          <StatsCircle consulted={consulted} pending={pending} />
        </div>
      </div>
    </div>
  )
};

export default DoctorHome;
