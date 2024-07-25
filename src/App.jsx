import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import HomeModule from "./Pages/HomeModule";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeModule></HomeModule>,
      children: [
        { index:true, element: <Home/> },
        { path: "about", element: <About/> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "login", element: <Login></Login> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
