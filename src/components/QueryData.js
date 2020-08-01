
import React, {useState} from 'react';
import Axios from "axios";

function QueryData() {
    const [query, setQuery] = useState("");
    const [RData, setRData] = useState([]);
    const [alert, setAlert] = useState("");

  const headers = {
    'Content-Type': 'application/json',
    'user-key': '0997dc3e6fb7b32390fe637998593e5b',
  }
  const Zurl=`https://developers.zomato.com/api/v2.1/search?entity_id=5&entity_type=city&q=${query}&sort=rating&order=asc`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(Zurl,{headers:headers});
      if (result.data.results_found==0) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRData(result.data.restaurants);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

return RData;

}

export default QueryData;