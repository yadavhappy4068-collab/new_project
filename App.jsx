import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import  { Movie } from "./pages/Movies";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./componets/layout/Applayout";
import { ErrorPage } from "./pages/Error";
import "./App.css"
import { getMoviesData } from "./API/GetAPIData";
import  {MoviesDetails}  from "./componets/UI/MoviesDetails";
import { getMovieDetails } from "./API/GetMoviesDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/Movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
        path: "/movie/:movieID",
        element: <MoviesDetails />,
        loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default App;
