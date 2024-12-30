import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/pages/Homepage";
import MoiveDetailsPage from "./components/pages/MoiveDetailsPage";
import SearchMoviePage from "./components/pages/SearchMoviePage";
import MovieCreditPage from "./components/pages/MovieCreditPage";
import CreditDetailPage from "./components/pages/CreditDetailPage";
import MovieNowPlayingPage from "./components/pages/MovieNowPlayingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "movie-detail/:id", element: <MoiveDetailsPage /> },
      { path: "search", element: <SearchMoviePage /> },
      { path: "movie/credit/:id", element: <MovieCreditPage /> },
      { path: "credit/details/:id", element: <CreditDetailPage /> },
      { path: "movie/:category", element: <MovieNowPlayingPage /> },
      // { path: "movie/popular", element: <MoviePopularPage /> },
      // { path: "movie/top-rated", element: <MovieTopRatedPage /> },
      // { path: "movie/up-coming", element: <MovieUpComingPage /> },
      { path: "/:id", element: <Homepage /> }, //for modals in homepage
    ],
  },
]);
export default router;
