import type { TripDay } from "../types/itinerary";

export const itinerary: TripDay[] = [
  {
    day: 1,
    date: "12 September 2026",
    title: "Kochi",
    stay: "Kochi",
    activities: [
      {
        time: "07:00",
        title: "Arrive Kochi",
        description:
          "Reach Kochi Railway Station, freshen up and have breakfast.",
        location: "Ernakulam Junction",
      },
      {
        time: "09:00",
        title: "Fort Kochi Walk",
        description:
          "Explore Fort Kochi, Dutch Palace and Chinese Fishing Nets.",
        location: "Fort Kochi",
      },
      {
        time: "13:00",
        title: "Kerala Sadya Lunch",
        description: "Traditional Kerala meal.",
      },
      {
        time: "17:30",
        title: "Sunset Cruise",
        description: "2-hour backwater sunset cruise.",
        preBook: true,
      },
      {
        time: "20:00",
        title: "Kathakali Show",
        description: "Optional cultural performance.",
        preBook: true,
      },
    ],
  },

  {
    day: 2,
    date: "13 September 2026",
    title: "Athirappilly → Munnar",
    stay: "Munnar",
    activities: [
      {
        time: "07:00",
        title: "Leave Kochi",
        description: "Start early by Innova/Ertiga.",
      },
      {
        time: "08:30",
        title: "Athirappilly Waterfall",
        description: "Spend around 2–2.5 hours.",
      },
      {
        time: "11:00",
        title: "Vazhachal Waterfall",
        description: "Quick stop.",
      },
      {
        time: "11:30",
        title: "Drive to Munnar",
        description: "Scenic drive.",
      },
      {
        time: "15:00",
        title: "Hotel Check-in",
        description: "Relax and freshen up.",
      },
      {
        time: "16:00",
        title: "Munnar Market",
        description: "Tea, snacks and shopping.",
      },
    ],
  },

  {
    day: 3,
    date: "14 September 2026",
    title: "Munnar",
    stay: "Munnar",
    activities: [
      {
        time: "07:00",
        title: "Kolukkumalai Jeep Ride",
        description: "Highest tea plantation.",
        preBook: true,
      },
      {
        time: "10:00",
        title: "Eravikulam National Park",
        description: "National park visit.",
        preBook: true,
      },
      {
        time: "14:00",
        title: "Tea Museum",
        description: "Visit Tata Tea Museum.",
      },
      {
        time: "16:30",
        title: "Mattupetty Dam",
        description: "Boating and sightseeing.",
      },
      {
        time: "18:00",
        title: "Top Station",
        description: "Sunset viewpoint.",
      },
    ],
  },

  {
    day: 4,
    date: "15 September 2026",
    title: "Munnar → Vagamon → Thekkady",
    stay: "Thekkady",
    activities: [
      {
        time: "07:00",
        title: "Leave Munnar",
        description: "Drive towards Vagamon.",
      },
      {
        time: "09:00",
        title: "Vagamon",
        description: "Pine Forest, Meadows, Marmala Waterfall.",
      },
      {
        time: "12:30",
        title: "Drive to Thekkady",
        description: "Approx. 2.5 hours.",
      },
      {
        time: "15:30",
        title: "Spice Plantation",
        description: "Guided walk.",
      },
      {
        time: "17:00",
        title: "Periyar Boat Ride",
        description: "Lake safari.",
        preBook: true,
      },
    ],
  },

  {
    day: 5,
    date: "16 September 2026",
    title: "Thekkady → Monroe Island → Varkala",
    stay: "Varkala",
    activities: [
      {
        time: "07:00",
        title: "Bamboo Rafting",
        description: "Periyar Tiger Reserve.",
        preBook: true,
      },
      {
        time: "11:30",
        title: "Drive to Monroe Island",
        description: "Approx. 3.5 hours.",
      },
      {
        time: "15:00",
        title: "Canoe Ride",
        description: "Explore narrow backwaters and village canals.",
        preBook: true,
      },
      {
        time: "17:30",
        title: "Drive to Varkala",
        description: "Approx. 1.5 hours.",
      },
      {
        time: "19:00",
        title: "Cliff Dinner",
        description: "Dinner overlooking the sea.",
      },
    ],
  },

  {
    day: 6,
    date: "17 September 2026",
    title: "Varkala",
    stay: "Varkala",
    activities: [
      {
        time: "06:00",
        title: "Sunrise",
        description: "Cliff viewpoint.",
      },
      {
        time: "09:00",
        title: "Kayaking",
        description: "Morning kayaking session.",
        preBook: true,
      },
      {
        time: "14:00",
        title: "Beach & Surfing",
        description: "Swimming and surfing lessons.",
        preBook: true,
      },
      {
        time: "17:30",
        title: "Sunset",
        description: "Varkala Cliff sunset.",
      },
    ],
  },

  {
    day: 7,
    date: "18 September 2026",
    title: "Varkala → Ponmudi → Kovalam",
    stay: "Kovalam",
    activities: [
      {
        time: "07:00",
        title: "Leave Varkala",
        description: "Drive towards Ponmudi.",
      },
      {
        time: "08:30",
        title: "Ponmudi",
        description: "Tea gardens, viewpoints and trails.",
      },
      {
        time: "13:00",
        title: "Arrive Kovalam",
        description: "Hotel check-in and lunch.",
      },
      {
        time: "14:00",
        title: "Parasailing",
        description: "Adventure activity.",
        preBook: true,
      },
      {
        time: "17:00",
        title: "Lighthouse Sunset",
        description: "Climb lighthouse for sunset.",
      },
    ],
  },

  {
    day: 8,
    date: "19 September 2026",
    title: "Kovalam",
    stay: "Kovalam",
    activities: [
      {
        time: "08:00",
        title: "Beach Day",
        description: "Relax, swim and enjoy cafés.",
      },
      {
        time: "16:00",
        title: "Evening Walk",
        description: "Explore local markets.",
      },
    ],
  },

  {
    day: 9,
    date: "20 September 2026",
    title: "Trivandrum → Bangalore",
    stay: "Night Train",
    activities: [
      {
        time: "10:30",
        title: "Padmanabhaswamy Temple",
        description: "Temple visit.",
      },
      {
        time: "12:00",
        title: "Shopping",
        description: "Buy spices, cashews and banana chips.",
      },
      {
        time: "18:00",
        title: "Board Train",
        description: "Return journey to Bangalore.",
      },
    ],
  },
];
