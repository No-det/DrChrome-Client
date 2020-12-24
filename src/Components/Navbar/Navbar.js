import "./Navbar.css";
import { useContext } from "react";
import { NavbarContext } from "../../Contexts/Navbar__Context";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { selected, setSelected } = useContext(NavbarContext);

  return (
    <div className="Navbar">
      <Link
        to="/"
        className={selected === 1 ? `material-icons active` : `material-icons`}
        onClick={() => setSelected(1)}
      >
        home
      </Link>
      <Link
        to="/"
        className={selected === 2 ? `material-icons active` : `material-icons`}
        onClick={() => setSelected(2)}
      >
        settings
      </Link>
      <Link
        to="/"
        className={selected === 3 ? `material-icons active` : `material-icons`}
        onClick={() => setSelected(3)}
      >
        folder
      </Link>
      <Link
        to="/doctor"
        className={selected === 4 ? `material-icons active` : `material-icons`}
        onClick={(e) => setSelected(4)}
      >
        notifications
      </Link>
      <div className="logout">
        <Link
          to="/patient"
          className={
            selected === 5 ? `material-icons active` : `material-icons`
          }
          onClick={() => setSelected(5)}
        >
          login
        </Link>
      </div>
    </div>
  );
}
