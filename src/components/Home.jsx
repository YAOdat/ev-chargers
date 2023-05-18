import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/homepage-hero-section.png";
import "../style/home.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/chargers");
  };


  return (
    <HelmetProvider>
      <div className="home-content">
        <Helmet>
          <title>Find the Best EV Chargers - Home</title>
          <meta
            name="description"
            content="Find the best electric vehicle chargers in the UAE and ME. Order the best chargers at the best prices."
          />
        </Helmet>
        <div className="hero-section">
          <div className="hero-left-side">
            <h1 className="hero-title">
              Find the best EV chargers in the UAE and ME
            </h1>
            <div>
              <p>
                You can order the best electric car chargers at the best
                prices
              </p>
            </div>
            <button className="main-button" onClick={handleButtonClick}>
              Explore Chargers
            </button>
          </div>
          <div className="hero-right-side">
            <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
        </div>
     
      </div>
    </HelmetProvider>
  );
}

export default Home;
