import React, { useState,useEffect } from "react";
import styled from "styled-components";

const FoodCard = ({ recipe }) => {
  const [textShow, setTextShow] = useState(false);
  const [divshow, setdivshow] = useState("nodivshow");
  const { name, featured_image, url, location, user_rating,average_cost_for_two } = recipe.restaurant;

  useEffect(()=>{
    if (textShow) {
      setdivshow("divshow");
    }
    else{
      setdivshow("nodivshow");
    }
  });

  return (
    <Card onMouseEnter={() => setTextShow(true)} onMouseLeave={() => setTextShow(false)}>
        <a href="/"><img src={featured_image} alt={name} />
        <div class="container">
            <h3><b>{name}</b></h3> 
            <h4>{location.address}</h4>
            <div>
            <span><i class="fa fa-star" aria-hidden="true"></i> <b>{user_rating.aggregate_rating}</b></span>.
            <span><b>- Min</b></span>.
            <span><b>{average_cost_for_two} For Two</b></span> 
            </div>
            <div className={divshow}>
            <hr/>
            <p><b>Quick View</b></p>
            </div>
        </div>
        </a>
    </Card>
  );
};


export default FoodCard;


const Card = styled.div`
  height:400px;
  width: 22%;
  border-radius: 5px;
  padding:0px 2px;

  :hover {
    // box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

.container .divshow{
  display:block;
}

.container .nodivshow{
  display:none;
}

a{
  text-decoration:none;
}

img {
  height:200px;
  width:92%;
  border-radius: 5px 5px 0 0;
  margin:10px 10px 0px 10px;
}

.container {
  padding: 0px 16px;
  
}
.container div{
  margin-bottom:5px;
}
.container span{
  font-size: 12px;
  margin-left:17px;
}
.container h3{
  font-size: 15px; 
  padding-bottom:1px;
  color:black;
}
.container h4{
  font-size: 12px; 
  padding-bottom:1px;
}

.container p{
  font-size: 12px; 
  padding:2px 0;
  text-align: center;
  color:black;
}
`;