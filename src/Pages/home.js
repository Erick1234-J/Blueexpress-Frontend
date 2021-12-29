//Components
import React, {Component} from 'react';
import TopNav from "../Components/Layout/top-nav";
import Slider from "../Components/slider";
import ParcelTracker from '../Components/parcel-tracker';
import Services from '../Components/our-services';
import ShipmentForm from "../Components/ship-form";
import AboutUs from '../Components/footer';
import BottomNav from '../Components/Layout/bottom-nav';
//Home CSS
import "./Home.css"



class Home extends Component {
   
    
    render(){
    return(
        <div className='body'>
            <br/>
            <TopNav  />
            <Slider />
            <br/>
            <ParcelTracker />
            <Services />
            <ShipmentForm />
            <AboutUs />
            <BottomNav />
        </div>
    )
  }
}

export default Home;