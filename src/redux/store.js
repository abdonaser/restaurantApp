import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './reducers';
import cartReducer from './reducers';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;

