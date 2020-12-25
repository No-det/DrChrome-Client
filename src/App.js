import NavbarContext from "./Contexts/Navbar__Context";
import Router from "./Router";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <NavbarContext>
      <Router />
    </NavbarContext>
  );
}

export default App;
