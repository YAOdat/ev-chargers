import React from "react";
import { useParams, Link } from "react-router-dom";
import chargerData from "../assets/chargers.json";
import { FaWhatsapp } from "react-icons/fa";
import { ImBackward } from "react-icons/im";
import "../style/charger.css";

function Charger() {
  const { chargerId } = useParams();

  // Find the charger with the matching id
  const charger = chargerData.find(
    (charger) => charger.id === parseInt(chargerId)
  );

  if (!charger) {
    return <div>Charger not found.</div>;
  }

  const { name, price, image, description, relatedProducts } = charger;

  return (
    <div className="one-charger-container">
      <div className="back-button-container">
        <button className="back-button">
          <span className="back-icon">
            <ImBackward className="back-icon" />
          </span>
          <Link className="back-link" to="/chargers">
            Back to Chargers
          </Link>
        </button>
      </div>

      <div className="one-charger-image">
        <img src={image} alt={name} />
      </div>
      <div className="one-charger-details">
        <h2 className="one-charger-name">{name}</h2>
        <p className="one-charger-price">Price: {price}</p>
        <p className="one-charger-description">{description}</p>
      </div>
      <a
        href={`https://api.whatsapp.com/send?phone=971501679410&text=mevcharger.com-${encodeURIComponent(
          charger.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="order-button"
      >
        <FaWhatsapp className="whatsapp-icon" />
        Order on WhatsApp
      </a>

      <div className="related-products">
        <h3>Related Products</h3>
        {relatedProducts.map((productId) => {
          const relatedProduct = chargerData.find(
            (product) => product.id === productId
          );
          if (relatedProduct) {
            return (
              <div key={relatedProduct.id} className="card">
                <img
                  className="related-product-image"
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                />
                <h3 className="related-product-title">{relatedProduct.name}</h3>
                <p className="related-product-description">
                  {relatedProduct.description}
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Charger;
