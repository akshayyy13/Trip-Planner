export type LuggageLocation = "Hotel" | "Car" | "Carry" | "Railway Cloak Room";

export type TransportMode =
  | "Walk"
  | "Scooter"
  | "Car"
  | "Train"
  | "Boat"
  | "Jeep"
  | "Auto";

export interface Activity {
  time: string;

  title: string;

  description: string;

  location?: string;

  duration?: string;

  transport?: TransportMode;

  luggage?: LuggageLocation;

  cost?: number;

  preBook?: boolean;

  bookingLink?: string;

  mapsLink?: string;

  priority?: "Must" | "Recommended" | "Optional";
}

export interface TripDay {
  day: number;

  date: string;

  title: string;

  stay: string;

  activities: Activity[];
}
