import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import HomeModule from "./Pages/HomeModule";
import ErrorPage from "./Pages/ErrorPage";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

function App() {
  //! I will Remove the Loader from this Component, i just put here to Test it.....
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
////////////////////////////////////////////////////////!This Part will be Removed by ME
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeModule />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "login", element: <Login />, errorElement: <ErrorPage /> },
  ]);

  return <>{loading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
