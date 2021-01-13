import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientHome from "./Components/PatientHome";
import DoctorHome from "./Components/DoctorHome";
import Appointment from "./Components/Appointment";
import Signin from "./Components/Index/Signin";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Layout";
import Signup from "./Components/Index/Signup";
import Divider from "./Components/Index/Divider";
import NotFound from "./Components/404";
import PatientSetup from "./Components/PatientSetup";
import DoctorSetup from "./Components/DoctorSetup";
import PrivateRoute from "./Contexts/Private__Route";

import PatientProfile from "./Components/PatientProfile";
import MeetingRoom from "./Components/MeetingRoom";
import WaitingRoom from "./Components/WaitingRoom";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={[
            "/test",
            "/doctor",
            "/patient",
            "/appointment/:id",
            "/waiting",
            "/meeting",
            "/profile",
          ]}
        >
          <Layout>
            <Switch>
              <PrivateRoute path="/test" component={Navbar} />
              <PrivateRoute exact path="/profile" component={PatientProfile} />
              <PrivateRoute path="/doctor" component={DoctorHome} />
              <PrivateRoute path="/patient" component={PatientHome} />
              <PrivateRoute path="/appointment/:id" component={Appointment} />
              <PrivateRoute path="/waiting" component={WaitingRoom} />
              <PrivateRoute path="/meeting" component={MeetingRoom} />
            </Switch>
          </Layout>
        </Route>
        <Route path={["/", "/signup", "/patientSetup", "/doctorSetup", "/isDoctor/"]}>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/patientSetup" component={PatientSetup} />
            <Route exact path="/doctorSetup" component={DoctorSetup} />
            <PrivateRoute exact path="/isDoctor/" component={Divider} />
            {/* <Route exact path="/room/:id" component={VideoConf} /> */}
            <Route component={NotFound} />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
