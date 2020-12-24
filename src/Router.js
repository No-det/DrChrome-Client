import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import PatientHome from "./Components/PatientHome";
import Layout from "./Layout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={App} />
          <Route exact path="/patient" component={PatientHome} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
