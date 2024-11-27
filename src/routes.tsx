import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);
export default router;
