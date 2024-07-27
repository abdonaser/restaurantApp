// MenuPage.js
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const selectedRestaurant = useSelector((state) => state.selectedRestaurant);
  const navigate = useNavigate();

  if (!selectedRestaurant) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h1>{selectedRestaurant.name}</h1>
      <p>{selectedRestaurant.serverCuisine}</p>
      {/* Display the menu items here */}
    </div>
  );
};

export default MenuPage;
