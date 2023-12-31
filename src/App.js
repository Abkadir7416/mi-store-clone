import React from "react";
import Navbar from "./components/Navbar";
import NavOptions from "./components/NavOptions";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Slider from "./components/Slider";
import data from './data/data.json'
// import {banner} from "./data/data.json"; //(doubt****)
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReview from "./components/ProductReview";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
          <Slider start={data.banner.start}/>
          <Offers offer={data.offer} />
          <Heading text="STAR PRODUCTS" />
          <StarProduct starProduct={data.starProduct} />
          <Heading text="HOT ACCESSORIES" />
          <HotAccessoriesMenu />

          <Routes>
            <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
            <Route exact path="/smartDevices" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
            <Route exact path="/home" element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home}/>}/>
            <Route exact path="/lifeStyle" element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle}/>}/>
            <Route exact path="/mobileAccessories" element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
          </Routes>

          <Heading text="PRODUCT REVIEWS" />
          <ProductReview productReviews={data.productReviews}/>
          <Heading text="VIDEOS" />
          <Videos videos={data.videos}/>
          <Heading text="IN THE PRESS" />
          <Banner banner={data.banner}/>
          <Footer footer={data.footer}/>
          
      </Router>
    </div>
  );
}

export default App;
