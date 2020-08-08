import React, { useEffect, useState } from 'react'
import FoodCard from '../FoodCard/Foodcards'
import FilterSidebar from '../Sidebar/FilterSidebar/FilterSideBar'
import "./AllRestaurants.scss";
import { connect } from 'react-redux'
import { fetchRestaurants,setChange } from '../../redux'

function AllRestaurants ({ userData,fetchRestaurants,setChange }) {

  const qurl = `https://developers.zomato.com/api/v2.1/search?entity_id=${userData.entityId}&entity_type=${userData.entityType}&sort=rating&order=asc`;
  
  useEffect(() => {
    // setUrl(qurl)
    // setTimeout(() => {
    //   fetchRestaurants(qurl)
    // }, 3000) 
    fetchRestaurants(qurl)
 
  }, [])


  return (
    <div className="main">
      <FilterSidebar/>
      <div className="filterhead">
        <button 
          // onClick={() => toggleMenu()}
          className="toggle-menu"
          // style={{
          //   transform: `translate(${width}px)`
          // }}
        ><i class="fa fa-sliders" aria-hidden="true"></i></button>
        <div className="span1">
          <a href="">Relevance</a>
          <a href="">Cost For Two</a>
          <a href="">Delivery Time</a>
          <a href="">Rating</a>
        </div>
        <span><b>Top Pick</b></span>
      </div>
      <hr/>
    <div className="foodCards">
    {userData &&
          userData.restaurants &&
          userData.restaurants.map(data => <FoodCard key={data.id} recipe={data} />)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: (url) => {
      // setTimeout(()=> {
      //   dispatch(fetchRestaurants(url))
      // } ,5000)
      dispatch(fetchRestaurants(url))
    },
    setChange: (data) => dispatch(setChange(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRestaurants);