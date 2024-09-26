import type {Flight, FlightCapacity, GroupedFlights, Orders, OrdersWithFlightInfo} from './types';

export function groupFlightsByDay(flights: Flight[]): GroupedFlights {
  flights.sort((a, b) => {
    if (a.day === b.day) {
      return a.flight_number - b.flight_number;
    }
    return a.day - b.day;
  });

  const groupedFlights = flights.reduce((acc, flight) => {
    const day = flight.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(flight);
      return acc;
  }, {} as GroupedFlights);

  return groupedFlights;
}

export function orderWithFlightData(flights: Flight[], orders: Orders) {
  const MAX_ORDERS = 20;

  const flightCapacity = flights.reduce((acc, flight) => {
      acc[flight.flight_number] = 0;
      return acc;
  }, {} as FlightCapacity);

  const orderWithFlightInfo: OrdersWithFlightInfo[] = [];

  for (const [orderId, order] of Object.entries(orders)) {
    let flightHasRoom = false;

    for (const flight of flights) {
      if (flightCapacity[flight.flight_number] < MAX_ORDERS && flight.arrival_city === order.destination ) {
        orderWithFlightInfo.push({
          order_number: orderId,
          flight_number: flight.flight_number.toString(),
          departure_city: flight.departure_city,
          arrival_city: flight.arrival_city,
          day: flight.day.toString()
        });
        flightCapacity[flight.flight_number]++;
        flightHasRoom = true;
        break;
      }
    }

    if (!flightHasRoom) {
      orderWithFlightInfo.push({
        order_number: orderId,
        flight_number: "",
        departure_city: "",
        arrival_city: "",
        day: "",
      });
    }
  }

  return orderWithFlightInfo;
}

export function filteredOrderByFlight(flight_number: string, day: string, flights: Flight[], orders: Orders) {
  const allOrders = orderWithFlightData(flights, orders);

  return allOrders.filter(order => order.flight_number === flight_number && order.day === day)
}