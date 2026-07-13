import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home/Home";
import Itinerary from "../pages/Itinerary/Itinerary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "itinerary",
        element: <Itinerary />,
      },
    ],
  },
]);
