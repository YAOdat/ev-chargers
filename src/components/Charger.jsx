import React from "react";
import { useParams } from "react-router-dom";
import chargerData from "../assets/chargers.json";
import "../style/charger.css";

function Charger() {
  const { chargerId } = useParams();

  // Find the charger with the matching id
  const charger = chargerData.find((charger) => charger.id === chargerId);

  if (!charger) {
    return <div>Charger not found.</div>;
  }

  const { name, price, description, image, category, relatedProducts } = charger;

  return (
    <div className="charger-container">
      <div className="charger-image">
        <img src={image} alt={name} />
      </div>
      <div className="charger-details">
        <h2 className="charger-name">{name}</h2>
        <p className="charger-price">Price: {price}</p>
        <p className="charger-description">{description}</p>
      </div>
      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-product-list">
          {relatedProducts.map((productId) => {
            const relatedProduct = chargerData.find(
              (charger) => charger.id === productId
            );
            return (
              <div key={relatedProduct.id} className="related-product-item">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Charger;
