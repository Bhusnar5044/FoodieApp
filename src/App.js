import React, { Component} from 'react';
import './App.css';
import AllRestaurants from './components/AllRestuarants/AllRestaurants';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import SignIn_SignUp from "./Pages/Sign_In-Sign_UP-Page/SignIn_SignUp";
import UserCart from "./Pages/UserCartPage/UserCart";
import Page_Not_Found from "./Pages/PageNotFound/404_Page";
// import RestaurantsPage from "./Pages/RestaurantsPage/Restaurants";

class App extends Component {
  render(){
    return (
        <div className="App">
          {/* <Home/> */}
          <ScrollToTopButton />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signIn" exact component={SignIn_SignUp} />
            <Route path="/userCart" exact component={UserCart} />
            <Route path="/userQueryRestaurants" exact component={AllRestaurants} />

            <Route path="*" component={Page_Not_Found} />
          </Switch>
          </div>
    );
  }
}

export default App;