import NavbarContext from "./Contexts/Navbar__Context";
import AuthContext from "./Contexts/Auth__Context";
import Router from "./Router";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <AuthContext>
      <NavbarContext>
        <Router />
      </NavbarContext>
    </AuthContext>
  );
}

export default App;
