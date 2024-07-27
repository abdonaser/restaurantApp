import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './reducers';
import cartReducer from './reducers';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});

export default store;

