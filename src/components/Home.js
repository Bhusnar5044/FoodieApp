import React, { Component,useState,useEffect } from 'react';
import Toolbar from './Toolbar'
import FoodCard from './FoodCard/Foodcards'
import FilterSidebar from './Sidebar/FilterSidebar/FilterSideBar'
import styled from "styled-components";
import Axios from "axios";
import {connect} from 'react-redux';

const Home = (props) =>{
  const [query, setQuery] = useState("Top");
  const [rdata, setRdata] = useState([]);
  const [alert, setAlert] = useState("");
  const [flag,setFlag]=useState(false);
  
  // const [entityType,setEntityType]=useState();

  const headers = {
    'Content-Type': 'application/json',
    'user-key': '0997dc3e6fb7b32390fe637998593e5b',
  }
  const Zurl=`https://developers.zomato.com/api/v2.1/search?entity_id=${props.user.entityId}&entity_type=${props.user.entityType}&q=${query}&sort=rating&order=asc`;

  const getData = () => {
    if (query !== "") {
      Axios.get(Zurl,{headers:headers})
      .then(res => {
        const result = res.data;
        if (result.results_found==0) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRdata(result.restaurants);
      setQuery("");
      setAlert("");
    })
    } else {
      setAlert("Please fill the form");
    }      
      
  };

  const onChange = e => setQuery(e.target.value);

  const HandleChange=(flag)=>{
    setFlag(flag)
  }
  useEffect(()=>{
    if(flag){
      getData();
    }
    setFlag(false)
  });
  
  return (
    <Main>
      <Toolbar onHandleChange={HandleChange} />
      <FilterSidebar/>
      <div className="filterhead">
        <span className="span1"><a href="">Relevance</a>
        <a href="">Cost For Two</a>
        <a href="">Delivery Time</a>
        <a href="">Rating</a>
        </span>
        <span><b>Top Pick</b></span>
      </div>
      <hr/>
    <div className="foodCards">
      {rdata !== [] &&  rdata.map(data => <FoodCard key={data.id} recipe={data} />)}
      </div>
    </Main>
  );
}

const mapStateToProps = (state) => {
  return{
      user: state.user,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//     setName: (name) =>{
//       dispatch(setName(name));
//     }
//   };
// };

export default connect(mapStateToProps)(Home);


const Main = styled.div`

.OfferSlider {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  top: 100px;
  height: 300px;
  width: 100%;
  background-color: #676a79;
}

.foodCards {
  width: 100%;
  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  justify-content: space-around;
}
/* .App {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.filterhead span a {
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: black;
  text-decoration: none;
  /* text-shadow: 0 0.2rem 5rem rgb(119, 115, 115); */
  /* text-transform: uppercase; */
  margin: 1rem 1rem 1rem 0;
}
.filterhead .span1{
  margin-left: 3.5rem;
}
.filterhead span {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: black;
  /* text-shadow: 0 0.2rem 5rem rgb(119, 115, 115); */
  /* text-transform: uppercase; */
  margin: 1rem 3rem;
}

`;