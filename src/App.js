import "./App.css";
import NavbarContext from "./Contexts/Navbar__Context";
import Router from "./Router";

function App() {
  return (
    <NavbarContext>
      <Router />
    </NavbarContext>
  );
}

export default App;
