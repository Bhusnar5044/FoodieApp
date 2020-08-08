import React, { useState } from "react";
import styled from "styled-components";
import {connect} from 'react-redux';
import { setChange } from '../../../actions/userActions';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      entity_id:this.props.location.entity_id,
      entity_type:this.props.location.entity_type,
      title:props.location.title,
      country_name:props.location.country_name,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  // const user={entity_id, entity_type, title}
  handleClick = () =>{
    this.props.onhandleClick(true);
    this.props.setChange(this.state);
  }
  render() {
   return (
      <Card onClick={this.handleClick}>
        <a><i class="fa fa-map-marker" aria-hidden="true"></i>
        <b>{this.state.title}</b><br/>
        {this.state.title}, {this.state.country_name}
        </a>
      </Card>
  )
  };
};

const mapStateToProps = (state) => {
  return{
      user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    setChange: (state) =>{
      dispatch(setChange(state));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Locations);


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