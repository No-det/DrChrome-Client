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
import SignUp2 from "./Components/SignUp2";
import PrivateRoute from "./Contexts/Private__Route";

import PatientProfile from "./Components/PatientProfile";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={["/test", "/doctor", "/patient", "/appointment/:id", "/profile"]}
        >
          <Layout>
            <Switch>
              <PrivateRoute path="/test" component={Navbar} />
              <PrivateRoute exact path="/profile" component={PatientProfile} />
              <PrivateRoute path="/doctor" component={DoctorHome} />
              <PrivateRoute path="/patient" component={PatientHome} />
              <PrivateRoute path="/appointment/:id" component={Appointment} />
            </Switch>
          </Layout>
        </Route>
        <Route path={["/", "/signup", "/signup2", "/isDoctor/"]}>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signup2" component={SignUp2} />
            <Route exact path="/isDoctor/" component={Divider} />
            <Route component={NotFound} />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
