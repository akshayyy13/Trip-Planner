import Hero from "../../components/home/Hero/Hero";
import CountdownCard from "../../components/common/CountdownCard/CountdownCard";
import QuickStats from "../../components/home/QuickStats/QuickStats";
import TravellerGrid from "../../components/home/TravellerGrid/TravellerGrid";
import TripTimeline from "../../components/home/TripTimeline/TripTimeline";

import "./Home.css";
import BookingChecklist from "../../components/home/BookingChecklist/BookingChecklist";
import TransportSummary from "../../components/home/TransportSummary/TransportSummary";

function Home() {
  return (
    <div className="home">
      <Hero />

      <CountdownCard />

      <QuickStats />

      <TravellerGrid />

      <TripTimeline />

      <BookingChecklist />

      <TransportSummary />
    </div>
  );
}

export default Home;
