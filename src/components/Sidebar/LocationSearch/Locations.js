import React, { useState } from "react";
import styled from "styled-components";
import { UserProvider } from '../../UserContext'
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
    // console.log('clicked',user.entityId);
  }
  render() {
    const user = {
      data: this.props.location,
    }
   return (
    <UserProvider value="hello">
      <Card onClick={this.handleClick}>
        <a><i class="fa fa-map-marker" aria-hidden="true"></i>
        <b>{this.state.title}</b><br/>
        {this.state.title}, {this.state.country_name}
        </a>
      </Card>
    </UserProvider> 
  )
  };
};
// const Locations = (props) => {
//   const [show, setShow] = useState(false);
//   const { entity_id, entity_type, title, country_name} = props.location;

//   const user={entity_id, entity_type, title}
//   const handleClick=e=>{
//     props.onhandleClick(true);
//     // console.log('clicked',user.entityId);
//   }
  
//   return (
//     <UserProvider value={user}>
//       <Card onClick={handleClick}>
//         <a><i class="fa fa-map-marker" aria-hidden="true"></i>
//         <b>{title}</b><br/>
//         {title}, {country_name}
//         </a>
//       </Card>
//     </UserProvider> 
//   );
// };


export default Locations;


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