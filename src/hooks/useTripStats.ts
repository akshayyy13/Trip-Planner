import { itinerary } from "../data/itinerary";
import { travellers } from "../data/travellers";
import { trip } from "../data/trip";

function useTripStats() {
  const totalActivities = itinerary.reduce(
    (total, day) => total + day.activities.length,
    0,
  );

  const totalPreBookings = itinerary.reduce(
    (total, day) =>
      total + day.activities.filter((activity) => activity.preBook).length,
    0,
  );

  const hotelNights = itinerary.filter(
    (day) => day.stay !== "Night Train",
  ).length;

  const uniqueDestinations = new Set(itinerary.map((day) => day.title));

  return {
    tripTitle: trip.title,

    tripDays: itinerary.length,

    travellers: travellers.length,

    totalActivities,

    totalPreBookings,

    hotelNights,

    destinations: uniqueDestinations.size,

    luggage: `${trip.luggage.trolleyPerPerson} Trolley + ${trip.luggage.backpackPerPerson} Backpack`,

    vehicle: trip.vehicle,

    trainTrips: 2,
  };
}

export default useTripStats;
