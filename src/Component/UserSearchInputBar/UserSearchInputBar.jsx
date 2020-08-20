import Style from "./UserSearchInputBar.module.scss";
import React, { Component } from "react";
import userQuery from "../../Redux/Actions/ActionsCreator/UserSearchActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class UserSearchInputBar extends Component {
  state = {
    location_query: "",
    restaurant_query: "",
  };

  render() {
    const {
      type,
      placeholder,
      name,
      userQuery,
      history,
      getRestaurantDetails,
      onChangeHandle
    } = this.props;
    const { location_query, restaurant_query } = this.state;
    return (
      <div className={Style.handleForm}>
        <form
          className={Style.UserResponse}
          onSubmit={e => {
            e.preventDefault();
            // userQuery(location_query, restaurant_query);
            onChangeHandle(e.target.value);
            // history.push("/userQueryRestaurants");
          }}
        >
          <input
            onChange={e => {
              e.target.name == "locationSearch"
                ? this.setState({ location_query: e.target.value })
                : this.setState({ restaurant_query: e.target.value });
                onChangeHandle(e.target.value);
            }}
            type={type}
            placeholder={placeholder}
            required
            name={name}
            value={location_query}
          />
          <button type="sumbit">
            <i
              style={{ fontSize: "18px" }}
              className="fas fa-search-location"
            ></i>
          </button>
        </form>
      </div>
    );
  }
}
let mapDispatchToprops = dispatch => {
  return {
    userQuery: (locationquery, restaurantquery) =>
      dispatch(userQuery(locationquery, restaurantquery)),
  };
};
export default withRouter(
  connect(null, mapDispatchToprops)(UserSearchInputBar)
);

// import Style from "./UserSearchInputBar.module.scss";
// import userQuery from "../../Redux/Actions/ActionsCreator/UserSearchActionCreators";
// import "./UserSearchInputBar.scss";
// import PlacesAutocomplete from "react-places-autocomplete";
// import React, { useState,useEffect } from "react";

// import { connect } from "react-redux";
// import {useHistory} from "react-router";
// import { withRouter } from "react-router-dom";

// function UserSearchInputBar ({type,placeholder,name,onChangeHandle}) {
//   const [query, setQuery] = useState("");
  
//   const onChange = e => {
//     setQuery(e.target.value);
//     onChangeHandle(query);
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     setQuery(e.target.value);
//     onChangeHandle(query);
//   }

//     return (
//       <div className={Style.handleForm}>
//         <form className={Style.UserResponse} onSubmit={onSubmit} >
//           <input
//             onChange={onChange}
//             type={type}
//             placeholder={placeholder}
//             required
//             name={name}
//           />
//           <button type="sumbit">
//             <i
//               style={{ fontSize: "18px" }}
//               className="fa fa-search" aria-hidden="true"
//             ></i>
//           </button>
//         </form>
//       </div>
//     );
//   }

// export default UserSearchInputBar;
