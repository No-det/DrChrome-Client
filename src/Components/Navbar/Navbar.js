import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <a href="/" className={`material-icons ${props.home}`}>
        home
      </a>
      <a href="/" className={`material-icons ${props.settings}`}>
        settings
      </a>
      <a href="/" className={`material-icons ${props.storage}`}>
        folder
      </a>
      <a href="/" className={`material-icons ${props.notifications}`}>
        notifications
      </a>
      <div className="logout">
        <a href="/" className={`material-icons ${props.logout}`}>
          login
        </a>
      </div>
    </div>
  );
}
