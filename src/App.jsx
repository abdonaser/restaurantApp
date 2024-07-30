import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import HomeModule from "./Pages/HomeModule";
import UserInfo from "./Pages/UserInfo";
import AccountInfo from "./Components/UserInfo/AccountInfo";
import UserOrders from "./Components/UserInfo/UserOrders";
import SavedAddress from "./Components/UserInfo/SavedAddress";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeModule></HomeModule>,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "login", element: <Login></Login> },
    {
      path: "profile",
      element: <UserInfo></UserInfo>,
      children: [
        { index: true, element: <AccountInfo></AccountInfo> },
        { path: "accountInfo", element: <AccountInfo></AccountInfo> },
        { path: "savedAddress", element: <SavedAddress></SavedAddress> },
        { path: "userOrders", element: <UserOrders></UserOrders> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
