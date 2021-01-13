import "./index.css";
import {useEffect} from 'react';

const StatsCircle = (props) => {
  const CircleStyle = {
    backgroundImage: `conic-gradient(#6c63ff 0 ${props.consulted}%, #fa6900 0 ${props.pending + props.consulted}%, #00fa96 0)`,
    // backgroundImage: `conic-gradient(#6c63ff ${props.consulted}%, #fa6900 0)`,
  };

  return (
    (props.consulted && props.pending) &&
    <div className="statsContainer">
      <div className="bigCircle" style={CircleStyle}>
        <div className="innerCircle">
          <div className="innerMostCircle">
            <p>Patients</p>
            <p>200</p>
          </div>
        </div>
      </div>
      <div className="markers">
        <div className="stats">
          <div
            className="statsColor"
            style={{ backgroundColor: "#6C63FF" }}
          ></div>
          <div className="statsName" style={{ color: "#6C63FF" }}>
            Consultation
          </div>
        </div>
        <div className="stats">
          <div
            className="statsColor"
            style={{ backgroundColor: "#00FA96" }}
          ></div>
          <div className="statsName" style={{ color: "#00FA96" }}>
            Pending
          </div>
        </div>
        <div className="stats">
          <div
            className="statsColor"
            style={{ backgroundColor: "#fa6900" }}
          ></div>
          <div className="statsName" style={{ color: "#fa6900" }}>
            Cancelled
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCircle;
