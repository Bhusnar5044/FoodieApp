import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  
];

const Slider =() => {
  return (
      <div className="OfferSlider">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
  );
}

export default Slider;

const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 250px;
width: 100%;
background-color: #00008B;
color: #fff;
margin: 0 10px;
font-size: 4em;
`;


