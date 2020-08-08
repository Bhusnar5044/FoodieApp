import "./UserSearchInputBar.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import React, { useState,useEffect } from "react";
// import userQuery from "../../Redux/Actions/ActionsCreator/UserSearchActionCreators";
import { connect } from "react-redux";
import {useHistory} from "react-router";
import { withRouter } from "react-router-dom";
import { fetchPlaces } from '../../redux'

function UserSearchInputBar (props) {
  const [query, setQuery] = useState("");
  const [click,setClick] = useState(false);
  
  const history = useHistory();
  const url = `https://developers.zomato.com/api/v2.1/locations?query=${query}`;
  
  // useEffect(() => {
  //   if(click){
  //     props.fetchPlaces(url);
  //   }
  // }, [])

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    // setClick(true)
    props.fetchPlaces(url);
    setTimeout(() => {
      history.push("/userQueryRestaurants");
    }, 1000); 
    // history.push("/userQueryRestaurants");
  };


    return (
      <div className="handleForm">
        <form className="UserResponse" onSubmit={onSubmit} >
          <input
            onChange={onChange}
            type={props.type}
            placeholder={props.placeholder}
            required
            name={props.name}
          />
          <button type="sumbit">
            <i
              style={{ fontSize: "18px" }}
              className="fa fa-search" aria-hidden="true"
            ></i>
          </button>
        </form>
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
