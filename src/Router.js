import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientHome from "./Components/PatientHome";
import DoctorHome from "./Components/DoctorHome";
import Signin from "./Components/Index/Signin";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Layout";
import Signup from "./Components/Index/Signup";
import NotFound from "./Components/404";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/test", "/doctor", "/patient"]}>
          <Layout>
            <Switch>
              <Route path="/test" component={Navbar} />
              <Route path="/doctor" component={DoctorHome} />
              <Route path="/patient" component={PatientHome} />
            </Switch>
          </Layout>
        </Route>
        <Route path={["/", "/signup"]}>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
