import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// header componet
export const HeadingComponent = () => {
  const [buttonReact, setButtonReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Adout Us</li>
          <li>Contact Us</li>
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
