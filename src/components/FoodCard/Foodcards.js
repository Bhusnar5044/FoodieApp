import React, { useState,useEffect } from "react";
import './foodCard.css'
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
    <div className="card" onMouseEnter={() => setTextShow(true)} onMouseLeave={() => setTextShow(false)}>
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
    </div>
  );
};


export default FoodCard;
