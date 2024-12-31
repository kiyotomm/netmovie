import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/pages/Homepage";
import MoiveDetailsPage from "./components/pages/MoiveDetailsPage";
import SearchMoviePage from "./components/pages/SearchMoviePage";
import MovieCreditPage from "./components/pages/MovieCreditPage";
import CreditDetailPage from "./components/pages/CreditDetailPage";
import MovieListPageDetail from "./components/pages/MovieListPageDetail";

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
      { path: "movie-list/:category", element: <MovieListPageDetail /> },
      // { path: "movie/popular", element: <MoviePopularPage /> },
      // { path: "movie/top-rated", element: <MovieTopRatedPage /> },
      // { path: "movie/up-coming", element: <MovieUpComingPage /> },
      { path: "/:id", element: <Homepage /> }, //for modals in homepage
    ],
  },
]);
export default router;
