
import React, {useState} from 'react';
import styled from "styled-components";
import SearchBar from './Sidebar/LocationSearch/SearchBar';
import {connect} from 'react-redux';

function Toolbar(props){
  const width=380;
  const height ="100vh";
  const [xPosition, setX] = useState(-width);
  const [location, setLocation] = useState("Select Location");
  const [flag, setFlag] = useState(false);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  const handleChange = (flag1) => {
    props.onHandleChange(flag1);
    if(flag){
      console.log("clicked",props.user.locationTitle);
    }
    setFlag(flag1);
  }

  React.useEffect(() => {
    setX(0);
    if(flag){
      setX(-width);
    }
    else{
      setFlag(false);
    }
  }, []);

  return (
  
  <Nav>
    <div class="topnav">
      <a class="active" href="/">The Logo</a>
     
      <a onClick={() => toggleMenu()} >
        {props.user.locationTitle}, {props.user.country} <i class="fa fa-map-marker" aria-hidden="true"></i></a>

      <div class="nav_item">
        <a href="/"><i class="fa fa-search"></i>Search</a>
        <a href="/"><i class="fa fa-percent" aria-hidden="true"></i>Offers</a>
        <a href="/"><i class="fa fa-handshake-o" aria-hidden="true"></i>Help</a>
        <a href="/"><i class="fa fa-user" aria-hidden="true"></i>Sign In</a>
        <a href="/"><i class="fa fa-shopping-bag" aria-hidden="true"></i>Cart</a>
      </div>
    </div>
    <div className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
      <span class="close" onClick={() => toggleMenu()} >&times;</span>
      <SearchBar onGetLoc={handleChange}/>
    </div>
  </Nav>  
  );
}

const mapStateToProps = (state) => {
  return{
      user: state.user,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//     setName: (entityId,entityType,title,country) =>{
//       dispatch(setName(entityId,entityType,title,country));
//     }
//   };
// };

export default connect(mapStateToProps)(Toolbar);



const Nav = styled.div`
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

width:100%;
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

.side-bar {
  top:0px;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-radius: 0;
  border-color: rgba(64, 194, 133, 0.693);
  background-color: rgb(255, 255, 255);
  transition: 0.8s ease;
  z-index: 1;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.nav_item{
display:flex;
float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
`;