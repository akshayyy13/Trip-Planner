export type TransportType = "Train" | "Car" | "Scooter" | "Walk";

export interface TransportItem {
  id: number;

  title: string;

  type: TransportType;

  provider: string;

  status: "Booked" | "Pending" | "Optional";

  price: string;

  note: string;
}
