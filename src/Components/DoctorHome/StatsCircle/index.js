import "./index.css";

const StatsCircle = (props) => {
  const CircleStyle = {
    backgroundImage: `conic-gradient(#6c63ff 15%, #fa6900 0 50%, #00fa96 0)`,
  };

  return (
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
            style={{ backgroundColor: "#fa6900" }}
          ></div>
          <div className="statsName" style={{ color: "#fa6900" }}>
            Cancelled
          </div>
        </div>
        <div className="stats">
          <div
            className="statsColor"
            style={{ backgroundColor: "#00FA96" }}
          ></div>
          <div className="statsName" style={{ color: "#00FA96" }}>
            Return
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCircle;
