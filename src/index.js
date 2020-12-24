import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
// import App from "./App";
// import DoctorHome from "./Components/DoctorHome";
import PatientHome from "./Components/PatientHome";
import Navbar from './Components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
  <Navbar />
    <PatientHome />
=======
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
>>>>>>> 567c7dd4880b683c177bcad96d3c8d93541a7f43
  </React.StrictMode>,
  document.getElementById("root")
);
