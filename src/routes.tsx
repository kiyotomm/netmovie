import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/pages/Homepage";
import MoiveDetailsPage from "./components/pages/MoiveDetailsPage";

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
      { path: "/:id", element: <Homepage /> }, //for modals in homepage
    ],
  },
]);
export default router;
