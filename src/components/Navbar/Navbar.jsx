import React from "react";
import Style from "./Navbar.module.scss";
import Logo from "../../Assets/Images/Logo.jpg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className={Style.main_container}>
      <div
        style={{
          display: "flex",
          width: "75%",
          alignItems: "center",
        }}
      >
        <img src={Logo} className={Style.logo} alt="LOGO" />
        <h2 className={Style.logo1}>
          _FOOD 4 FOODIE_
          <p className={Style.tagline}>Faster than you can imagine</p>
        </h2>
      </div>
      <ul className={Style.Navigation_list}>
        <li>
          <NavLink
            to="/"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            <i className="fa fa-home" aria-hidden="true">&nbsp;Home</i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signIn"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            {" "}
            <i className="fa fa-user" aria-hidden="true">&nbsp;SignIn</i>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/userCart"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            <i className="fa fa-cart-plus" aria-hidden="true">&nbsp;Cart</i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
