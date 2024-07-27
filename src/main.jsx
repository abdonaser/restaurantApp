// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
