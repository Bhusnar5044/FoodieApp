import React, { Component } from "react";
import "./Homepage.scss";
import Pic from "../../Assets/Images/food4.jpg";
import Card from "../../components/Card/Card";

import UserSearchInputBar from "../../components/UserSearchInputBar/UserSearchInputBar";
import Advertisement from "../../components/Advertisement/AdverTisement";
import Footer from "../../components/Footer/Footer";
class Homepage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div
          className="maincontainer"
          style={{ backgroundImage: `url(${Pic})` }}
        >
          <br />
          <br />
          <br />

          <Advertisement />
          <div className="InputField">
            <UserSearchInputBar
              type={"text"}
              placeholder={"Search Restaurants by location..."}
              name="locationSearch"
            />

            <h3 style={{ textAlign: "center", marginTop: "60px" }}>
              <i>OR</i>
            </h3>

            <UserSearchInputBar
              type={"text"}
              placeholder={"Search Restaurants by Name..."}
              name="restaurantSearch"
            />
          </div>
        </div>
        <Card />
        <Footer />
      </>
    );
  }
}
export default Homepage;
