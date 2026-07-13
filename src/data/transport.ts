import type { TransportItem } from "../types/transport";

export const transport: TransportItem[] = [
  {
    id: 1,
    title: "Bangalore → Kochi",
    type: "Train",
    provider: "Indian Railways",
    status: "Booked",
    price: "₹2,300",
    note: "3AC",
  },
  {
    id: 2,
    title: "Self Drive Innova / Ertiga",
    type: "Car",
    provider: "Zoomcar / Local Rental",
    status: "Pending",
    price: "₹25,000",
    note: "9 Days",
  },
  {
    id: 3,
    title: "Varkala Scooter",
    type: "Scooter",
    provider: "Local Rental",
    status: "Pending",
    price: "₹500/day",
    note: "Optional",
  },
  {
    id: 4,
    title: "Trivandrum → Bangalore",
    type: "Train",
    provider: "Indian Railways",
    status: "Pending",
    price: "₹2,300",
    note: "Book Early",
  },
];
