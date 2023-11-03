import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// header componet
export const HeadingComponent = () => {
  const [buttonReact, setButtonReact] = useState("Login");
  console.log("hello");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/about'>Adout Us</Link>
          </li>
          <li><Link to='/contact'> Contact Us</Link></li>
          <li>Cart</li>
          <button
            onClick={() =>
              buttonReact === "Login"
                ? setButtonReact("Logout")
                : setButtonReact("Login")
            }
            className="btn-react"
          >
            {buttonReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
