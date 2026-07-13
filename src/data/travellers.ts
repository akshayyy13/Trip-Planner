export interface Traveller {
  id: number;
  name: string;
  city: string;
  startLocation: string;
  destination: string;
  train?: string;
  color: string;
}

export const travellers: Traveller[] = [
  {
    id: 1,
    name: "Akshay",
    city: "Bangalore",
    startLocation: "Bangalore",
    destination: "Kochi",
    color: "#2563eb",
  },
  {
    id: 2,
    name: "Shubhanshu",
    city: "Bangalore",
    startLocation: "Bangalore",
    destination: "Kochi",
    color: "#059669",
  },
  {
    id: 3,
    name: "Aman",
    city: "Ahmedabad",
    startLocation: "Ahmedabad",
    destination: "Kochi",
    train: "16335 Gandhidham–Nagercoil Express",
    color: "#ea580c",
  },
  {
    id: 4,
    name: "Ayush",
    city: "Mumbai",
    startLocation: "Mumbai",
    destination: "Kochi",
    color: "#7c3aed",
  },
];
