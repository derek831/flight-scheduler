export interface Flight {
  flight_number: number;
  departure_city: string;
  arrival_city: string;
  day: number;
}

interface Order {
  destination: string;
}

export interface Orders {
  [key: string]: Order
}

export interface GroupedFlights {
  [key: number]: Flight[];
}

export interface FlightCapacity {
  [key: number]: number;
}

export interface OrdersWithFlightInfo {
  order_number: string;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  day: string;
}