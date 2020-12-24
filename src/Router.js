import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientHome from "./Components/PatientHome";
import DoctorHome from "./Components/DoctorHome";
import Signin from "./Components/Index/Signup";
// import Design from "./Components/Index/Designs/design";
import Navbar from './Components/Navbar/Navbar'
import Layout from "./Layout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/test" component={Navbar} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/doctor" component={DoctorHome} />
        <Route exact path="/patient" component={PatientHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
