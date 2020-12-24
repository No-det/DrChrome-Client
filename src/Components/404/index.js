import { Link } from "react-router-dom";
import "./index.css";
import image from "../../assets/404.svg";

const NotFound = () => {
  return (
    <div className="nf__main">
      <div className="nf__left">
        <div className="nf__top">
          <blockquote>
            It is health that is the real wealth, and not pieces of gold and
            silver.
          </blockquote>
          <p className="nf__credit">
            <i>Mahatma Gandhi</i>
          </p>
        </div>
        <div className="nf__bottom">
          <Link to="/">Back To Home page</Link>
        </div>
      </div>
      <div className="nf__right">
        <img src={image} alt="Page Not Found" />
      </div>
    </div>
  );
};

export default NotFound;
