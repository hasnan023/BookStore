import React from 'react'
import "./home.css";
import Navbar from "../components/navBar";
import Banner from '../components/Banner';
import LiteratureTypesRow from '../components/Filter';
import FeaturedBooks from '../components/Category';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';

function Home() {
  return (
    
    
    <div>
      
      <Banner/>
      {/* <LiteratureTypesRow/> */}
      <FeaturedBooks/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Home;
