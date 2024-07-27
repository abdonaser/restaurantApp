import React from "react";
import "../Styles/HomeCard.css";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="restaurant-image"
      />
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <p className="restaurant-rating">⭐ {restaurant.rating}</p>
      <p className="restaurant-cuisine">{restaurant.serverCuisine}</p>
      <button className="show-menu-button">Show Menu</button>
    </div>
  );
}

export default RestaurantCard;
