export interface BookingItem {
  id: number;
  title: string;
  category: string;
  completed: boolean;
  mandatory: boolean;
  due: string;
  estimatedCost: string;
}

export const bookings: BookingItem[] = [
  {
    id: 1,
    title: "Bangalore → Kochi Train",
    category: "Train",
    completed: true,
    mandatory: true,
    due: "Booked",
    estimatedCost: "₹2,300",
  },
  {
    id: 2,
    title: "Trivandrum → Bangalore Train",
    category: "Train",
    completed: false,
    mandatory: true,
    due: "Book ASAP",
    estimatedCost: "₹2,300",
  },
  {
    id: 3,
    title: "Periyar Bamboo Rafting",
    category: "Activity",
    completed: false,
    mandatory: true,
    due: "2 Weeks Before",
    estimatedCost: "₹1,000",
  },
  {
    id: 4,
    title: "Innova / Ertiga Rental",
    category: "Transport",
    completed: false,
    mandatory: true,
    due: "1 Week Before",
    estimatedCost: "₹25,000",
  },
  {
    id: 5,
    title: "Hotels",
    category: "Stay",
    completed: false,
    mandatory: true,
    due: "Book Early",
    estimatedCost: "₹22,000",
  },
  {
    id: 6,
    title: "Travel Insurance",
    category: "Safety",
    completed: false,
    mandatory: false,
    due: "Optional",
    estimatedCost: "₹500",
  },
];
