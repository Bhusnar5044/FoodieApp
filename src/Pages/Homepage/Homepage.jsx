import React, { useState } from "react";
import "./Homepage.scss";
import Pic from "../../Assets/Images/food4.jpg";
import Card from "../../components/Card/Card";
import Locations from '../../components/LocationSearch/Locations';
import UserSearchInputBar from "../../components/UserSearchInputBar/UserSearchInputBar";
import Advertisement from "../../components/Advertisement/AdverTisement";
import Footer from "../../components/Footer/Footer";
import { fetchPlaces } from '../../redux';
import { connect } from "react-redux";
import {useHistory} from "react-router";
import { withRouter } from "react-router-dom";

const Homepage = ({userData,fetchPlaces}) =>{
  const [query, setQuery] = useState("");

  const getSearch = (query) =>{
    setQuery(query);
    const url = `https://developers.zomato.com/api/v2.1/locations?query=${query}`;
    fetchPlaces(url);
  }

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
            onChangeHandle={getSearch}
          />
          <div className="places">
          { userData.places!== [] &&
            userData.places.map(location =>
            <Locations key={location.entity_Id} location={location} />)
          }
          </div>

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

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToprops = dispatch => {
return {
  fetchPlaces: (url) =>
  dispatch(fetchPlaces(url)),
  // setChange: (url) =>
  // setChange(setChange(url)),
  };
};

export default withRouter(
connect(mapStateToProps, mapDispatchToprops)(Homepage)
);
