import React,{useState,useEffect} from 'react';
import './Restaurant.scss';
import {connect} from 'react-redux';
import RestData from './RestaurantMenu.json';

function RestaurantHome ({userData}) {
  const [search,setSearch] =useState("");
  const {name,featured_image,location,timings,user_rating,cuisines,all_reviews_count} = userData.restaurantData;
  const address = location ? location.address:"";
  const aggregate_rating = user_rating? user_rating.aggregate_rating:"";

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const filteredMenu = RestData.items.filter(data => {
    return data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="main">
      <div className="container sticky-top r-box">
      <div className="row align-items-center">
        <div className="col">
          <div className="r-img">
            <img src={featured_image} alt="img"/>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <h1 className="rtitle">{name}</h1>
            <p>{cuisines}</p><br/>
            <p>{address}</p>
          </div>
          <div className="row rate-box">
            <div className="col ">
              <div className="row justify-content-center">
                ⭐ {aggregate_rating}
              </div>
              <div className="row justify-content-center">
               {all_reviews_count} Reviews
              </div>
            </div>
            <div className="col rate ">
              <div className="row justify-content-center">
              {timings}
              </div>
              <div className="row justify-content-center">
                Timing
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <button type="button" className="btn btn-warning">Ours Special</button>
        </div>
      </div>
    </div>

    <div className="container search-dish">
        <div className="row">
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Search for dishes" onChange={onChange}  value={search} />
          </div>
          <div className="col-2 ">
            <div className="row">
              <div className="col-2">
                <input type="checkbox"/>
              </div>
              <div className="col-8 ">
                <a href="">Veg</a>
              </div>
            </div>
          </div>
          <div className="col-2">
              <a href="">Favourite</a>
          </div>
        </div>
    </div>

    <div className="container">
      <div className="row rec-title justify-content-center">
        <h6><b> Recommended</b><sub> (44 items)</sub></h6>
       </div>
      <div className="row">
        <div  className="col left-bar ">
          <div >
            <h6 className="rec-text"> Recommended</h6>
          </div>
          <div className=" rec">
            <a href=""> Healthylicious</a>
          </div>
          <div className=" rec">
            <a href=""> Fruitylicious (Fruit Icecreams)</a>
          </div>
          <div className=" rec">
            <a href=""> Nuttylicious (Dry Fruit Icecreams)</a>
          </div>
          <div className=" rec">
            <a href=""> Kulfilicious (Kulfis)</a>
          </div>
          <div className=" rec">
            <a href=""> Recommended</a>
          </div>
        </div>
        
        <div className="col-7 menu-box border-right border-left">
          
        { filteredMenu &&
          filteredMenu.map(data => 
          <div className="row menu" key={data.id} >
            <div class="col-4">
              <div className="row">
                <img src={data.imageUrl} alt="img"/>
              </div>
              
              <div className="row">
                <button type="button" id={data.id} className="btn btn-secondary btn-sm">Add</button>
              </div>
            </div>
            <div className="col-8">
              
              <div className="row">
                <h6><b>{data.name}</b></h6>
              </div>
                <h6>₹ {data.price}</h6>
              <div className="row menu-detail">
                Grab the toy of the month with your favourite Happy meal. Enjoy a combo of American Cheese Supreme Veg + Drink + Toy of the month; and bring out the child in you.
              </div>
            </div>
            <hr className="hrr"/>
          </div>
          )}
          
        </div>
        <div className="col-2 right-bar">
          <h3>Cart Empty</h3>
          <div className="r-img">
            <img src="" alt="img"/>
          </div>
          <div className="cart-txt">
            Good food is always cooking! Go ahead, order some yummy items from the menu.
          </div>

        </div>
      </div>
    </div>
    
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return{
      userData: state.user,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//     setChange: (state) =>{
//       dispatch(setChange(state));
//     }
//   };
// };

export default connect(mapStateToProps,null)(RestaurantHome);
