import { createBrowserRouter } from "react-router-dom";

import App from "./App";

// Pages
import Home from "./pages/Home/Home";
import Itinerary from "./pages/Itinerary/Itinerary";
import Transport from "./pages/Transport/Transport";
import Hotels from "./pages/Hotels/Hotels";
import Activities from "./pages/Activities/Activities";
import Food from "./pages/Food/Food";
import Budget from "./pages/Budget/Budget";
import Packing from "./pages/Packing/Packing";
import Bookings from "./pages/Bookings/Bookings";
import Emergency from "./pages/Emergency/Emergency";

const router = createBrowserRouter([
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
      {
        path: "transport",
        element: <Transport />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "activities",
        element: <Activities />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "packing",
        element: <Packing />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "emergency",
        element: <Emergency />,
      },
    ],
  },
]);

export default router;
