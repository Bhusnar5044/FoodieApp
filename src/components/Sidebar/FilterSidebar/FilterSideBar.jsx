import './FilterSidebar.scss';
import Sidebar from '../Sidebar';
import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCuisines } from '../../../redux'

function FilterSideBar ({ userData, fetchCuisines }) {
    useEffect(() => {
      const url =`https://developers.zomato.com/api/v2.1/cuisines?city_id=${userData.entityId}`;
      fetchCuisines(url)
      
    }, [])
  	const [search,setSearch] =useState("");
  
  const filteredCuisines = userData.cuisines.filter(data => {
      return data.cuisine.cuisine_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e =>[

  ]

  return (
  <Sidebar width={300} height={"100vh"}>
    <form onSubmit={onSubmit}>
    <p>Preference</p>
      <ul>
        <li><input type="checkbox" name="Veg" value="Veg"/>Veg</li>
        <li><input type="checkbox" name="Non-Veg" value="Non-Veg"/>Non-Veg</li>
      </ul>
      <p>Cuisines</p>
      <input className="filter"
        type="text"
        name="query"
        onChange={onChange}
        value={search}
        // autoComplete="off"
        placeholder="Search Cuisines"
      />
      <ul className="cuisines">
      {userData.cuisines && filteredCuisines.map(data => <li key={data.cuisine.cuisine_id}><input type="checkbox" value={data.cuisine.cuisine_id} />{data.cuisine.cuisine_name}</li>)}
      {/* {userData &&
          userData.cuisines &&
          userData.cuisines.map(data => <li key={data.cuisine.cuisine_id}><input type="checkbox" value={data.cuisine.cuisine_id} />{data.cuisine.cuisine_name}</li>)}
       */}
      </ul>
      <p>Sort By</p>
      <ul>
        <li><input type="checkbox" name="Popularity - high tolow" value="Popularity - high tolow"/>Popularity - high tolow</li>
        <li><input type="checkbox" name="Rating - high to low" value="Rating - high to low"/>Rating - high to low</li>
        <li><input type="checkbox" name="Cost-hightolow" value="Cost-hightolow"/>Cost-hightolow</li>
        <li><input type="checkbox" name="Cost-lowtohigh" value="Cost-lowtohigh"/>Cost-lowtohigh</li>
      </ul>
      <div className="filterBottom">
        <button className="btn btn-primary">Clear</button>
        <button className="btn btn-primary">Apply</button>
      </div>
      </form>
  </Sidebar>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCuisines: (url) => dispatch(fetchCuisines(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSideBar)