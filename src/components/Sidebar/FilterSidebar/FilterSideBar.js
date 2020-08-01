import React from 'react';
import './SideDrawer.css';
import Sidebar from '../Sidebar';


const FilterSideBar = props => (
  <Sidebar width={300} height={"100vh"}>
          <ul>
      Preference
        <li><input type="checkbox" name="Veg" value="Veg"/>Veg</li>
        <li><input type="checkbox" name="Non-Veg" value="Non-Veg"/>Non-Veg</li>
      </ul>
      <ul>
      Cuisines
        <li><input type="checkbox" name="North Indian" value="North Indian"/>North Indian</li>
        <li><input type="checkbox" name="Chinese" value="Chinese"/>Chinese</li>
        <li><input type="checkbox" name="Fast Food" value="Fast Food"/>Fast Food</li>
        <li><input type="checkbox" name="Desserts" value="Desserts"/>Desserts</li>
        <li><input type="checkbox" name="Beverages" value="Beverages"/>Beverages</li>
        <li><input type="checkbox" name="Bakery" value="Bakery"/>Bakery</li>
        <li><input type="checkbox" name="SouthIndian" value="SouthIndian"/>SouthIndian</li>
        <li><input type="checkbox" name="Street Food" value="Street Food"/>Street Food</li>
        <li><input type="checkbox" name="Mughlai" value="Mughlai"/>Mughlai</li>
        <li><input type="checkbox" name="Biryani" value="Biryani"/>Biryani</li>
      </ul>
      <ul>
      Sort By
        <li><input type="checkbox" name="Popularity - high tolow" value="Popularity - high tolow"/>Popularity - high tolow</li>
        <li><input type="checkbox" name="Rating - high to low" value="Rating - high to low"/>Rating - high to low</li>
        <li><input type="checkbox" name="Cost-hightolow" value="Cost-hightolow"/>Cost-hightolow</li>
        <li><input type="checkbox" name="Cost-lowtohigh" value="Cost-lowtohigh"/>Cost-lowtohigh</li>
      </ul>
  </Sidebar>
      
);

export default FilterSideBar;