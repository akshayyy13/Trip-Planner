import Hero from "../../features/home/Hero/Hero";
import CountdownCard from "../../components/common/CountdownCard/CountdownCard";
import QuickStats from "../../features/home/QuickStats/QuickStats";
import TravellerGrid from "../../features/home/TravellerGrid/TravellerGrid";
import TripTimeline from "../../features/home/TripTimeline/TripTimeline";
import { Link } from "react-router-dom";

import "./Home.css";
import BookingChecklist from "../../features/home/BookingChecklist/BookingChecklist";
import TransportSummary from "../../features/home/TransportSummary/TransportSummary";

function Home() {
  return (
    <main className="home">
      <div className="container">
        <Hero />

        <CountdownCard />

        <QuickStats />

        <TravellerGrid />

        <TripTimeline />

        <BookingChecklist />

        <TransportSummary />
      </div>
    </main>
  );
}

export default Home;
