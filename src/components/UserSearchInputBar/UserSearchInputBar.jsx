import "./UserSearchInputBar.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import Locations from './Locations';
import React, { useState,useEffect } from "react";
// import userQuery from "../../Redux/Actions/ActionsCreator/UserSearchActionCreators";
import { connect } from "react-redux";
import {useHistory} from "react-router";
import { withRouter } from "react-router-dom";
import { fetchPlaces } from '../../redux'

function UserSearchInputBar ({userData,fetchPlaces,type,placeholder,name,onChangeHandle}) {
  const [query, setQuery] = useState("");
  const [click,setClick] = useState(false);
  const [locations,setLocations] = useState([]);
  
  const history = useHistory();
  // const url = `https://developers.zomato.com/api/v2.1/locations?query=${query}`;
  
  // useEffect(() => {
  //   setTimeout(() => {
      
  //   }, 2000);
  // }, [])

  const onChange = e => {
    setQuery(e.target.value);
    onChangeHandle(query);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.value);
    onChangeHandle(query);
    // fetchPlaces(url);
    // console.log(userData.places);
    // setdata();
    // setLocations(props.userData.places);
    // console.log("places:",locations);
  }

    // async function setdata(){
    //   await fetchPlaces(url);
    //   // setLocations(userData.places);
    //   // console.log("places:",locations);
    // }
    
    // setTimeout(() => {
    //   setLocations(props.userData.places);
    //   console.log("places:",locations);
    //   // history.push("/userQueryRestaurants");
    // }, 3000);
    // history.push("/userQueryRestaurants");
  // };


    return (
      <div className="handleForm">
        <form className="UserResponse" onSubmit={onSubmit} >
          <input
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            required
            name={name}
          />
          <button type="sumbit">
            <i
              style={{ fontSize: "18px" }}
              className="fa fa-search" aria-hidden="true"
            ></i>
          </button>
        </form>
        {/* { userData.places!== [] &&
        userData.places.map(location =>
          <Locations key={location.entity_Id} location={location} />)
        } */}
      </div>
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
  connect(mapStateToProps, mapDispatchToprops)(UserSearchInputBar)
);
