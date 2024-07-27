// actions.js
export const SET_SELECTED_RESTAURANT = 'SET_SELECTED_RESTAURANT';

export const setSelectedRestaurant = (restaurant) => ({
  type: SET_SELECTED_RESTAURANT,
  payload: restaurant,
});
