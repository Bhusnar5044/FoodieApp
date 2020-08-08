
import React, {useState} from 'react';
import styled from "styled-components";
import Locations from './Locations';
import Axios from "axios";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [entity_Id, setEntityId] = useState(5);
  const [entity_Type, setEntityType] = useState("City");
  const [location_Title, setLocationTitle] = useState("Select Location");
  const [alert, setAlert] = useState("");

  const headers = {
    'Content-Type': 'application/json',
    'user-key': '0997dc3e6fb7b32390fe637998593e5b',
  }
  const Zurl=`https://developers.zomato.com/api/v2.1/locations?query=${query}`;

  const getData = () => {
    if (query !== "") {
      Axios.get(Zurl,{headers:headers})
      .then(res => {
        const result = res.data;
        if (result.results_found==0) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setLocations(result.location_suggestions);
      setQuery("");
      setAlert("");
    });
  }
}

  const onChange = e => {
    // console.log(user.entityId)
    setQuery(e.target.value);
    // getData();
  };

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  const handleClick = (flag) => {
      props.onGetLoc(flag);
  }

return (

    <Search>
      <form onSubmit={onSubmit}>
            <input
              type="text"
              name="query"
              onChange={onChange}
              value={query}
              autoComplete="off"
              placeholder="Search For Location"
            />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      <div class="currloc">
        <a><b><i class="fa fa-map-marker" aria-hidden="true"></i>  Get Current Location</b></a>
        <p>Using GPS</p>
      </div>
      
      {locations !== [] &&
        locations.map(location =>
          <Locations key={location.entity_Id} location={location} onhandleClick={handleClick}/>)
      }
      
    </Search>  
  );
}

export default SearchBar;


const Search = styled.div`
display: flex;
flex-direction: column;
justify-content: centre;

form{
  margin-top:100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.currloc{
  margin:25px 10px;
  padding: 10px;
  border-style: solid;
  border-color: black;
}

.currloc p{
  margin-left:15px
}

input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #ccc;
}
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  border-radius: 5px;
  margin:15px 10px;
  text-align:centre;


:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
a{
    color:black;
    text-decoration:none;
}
a h3{
  font-size: 20px; 
  padding:5px 0;
  color:black;
}

 p{
  font-size: 12px; 
  padding:8px 0;
  text-align: center;
  color:black;
}
`;