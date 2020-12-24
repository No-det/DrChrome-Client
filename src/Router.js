import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import PatientHome from "./Components/PatientHome";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/patient" component={PatientHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
