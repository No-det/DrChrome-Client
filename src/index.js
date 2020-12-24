import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import DoctorHome from "./Components/DoctorHome";
import PatientHome from "./Components/PatientHome";
import Navbar from './Components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
  <Navbar />
    <PatientHome />
  </React.StrictMode>,
  document.getElementById("root")
);
