import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import '../style/chargers.css';
import chargerImage1 from "../assets/mega_portable_ev_charger.png";
import chargerImage2 from "../assets/wallkbox_EV_charger.png";
import extensionCableImage from "../assets/exten_cable.jpg";
import { FaWhatsapp } from 'react-icons/fa';
import { MdViewTimeline } from 'react-icons/md';

function Chargers() {
  const chargers = [
    {
      id: 1,
      name: "Mega Portable EV Charger",
      price: "900 AED",
      image: chargerImage1,
      description: "Fast portable EV charger that is compatible with Volkswagen ID.4 and ID.6 cars and other Chinese electric vehicles with GB/T charging port.",
    },
    {
      id: 2,
      name: "Mega Wallbox EV Charger",
      price: "1,400 AED",
      image: chargerImage2,
      description: "Fast EV charger that is compatible with all electric vehicles with GBT charging port, this includes Changan EV cars, Volkswagen ID4 and ID6.",
    },
    {
      id: 3,
      name: "Extension Cable",
      price: "550 AED",
      image: extensionCableImage,
      description: "Type 2 to GB/T 32 A Extension cable for EV Chargers. It comes in 5 meters length. It is useful for charging from a public charger that does not have a long enough cable.",
    },
  ];
  const navigate = useNavigate();


  return (
    <div className="chargers-container">
      <Helmet>
        <title>Available Chargers - MEV Chargers</title>
        <meta name="description" content="Browse through a wide range of available electric car chargers. Choose the best charger for your needs and order online." />
      </Helmet>
      <h1 className="chargers-title">Available EV Chargers</h1>
      {chargers.map((charger) => {
    

        return (
          <div key={charger.id} className="charger-card">
            <div className="charger-info">
              <div className="charger-details">
                <h2 className="charger-name">{charger.name}</h2>
                <p className="charger-price">Price: {charger.price}</p>
                <p className="charger-description">{charger.description}</p>
              </div>
              <div className="charger-image-container">
                <img src={charger.image} alt={charger.name} className="charger-image" />
              </div>
            </div>
            <div className="button-container">
            <button className="product-button" onClick={() => navigate(`/chargers/${charger.id}`)}>
  <MdViewTimeline className="ar-icon" />
  View Product
</button>


              <a
                href={`https://api.whatsapp.com/send?phone=971501679410&text=mevcharger.com-${encodeURIComponent(charger.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="order-button"
              >
                <FaWhatsapp className="whatsapp-icon" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chargers;
