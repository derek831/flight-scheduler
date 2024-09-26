import type {FlightCapacity, GroupedFlights, OrdersWithFlightInfo} from './types';
import flights from './data/flights.json';
import orders from './data/orders.json';

export function groupFlightsByDay(): GroupedFlights {
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

export function orderWithFlightData() {
  const MAX_ORDERS = 20;

  const flightCapacity = flights.reduce((acc, flight) => {
      acc[flight.flight_number] = 0;
      return acc;
  }, {} as FlightCapacity);

  const orderMapping: OrdersWithFlightInfo[] = [];

  for (const [orderId, order] of Object.entries(orders)) {
    let assigned = false;

    for (const flight of flights) {
      if (flight.arrival_city === order.destination && flightCapacity[flight.flight_number] < MAX_ORDERS) {
        orderMapping.push({
          order_number: orderId,
          flight_number: flight.flight_number.toString(),
          departure_city: flight.departure_city,
          arrival_city: flight.arrival_city,
          day: flight.day.toString()
        });
        flightCapacity[flight.flight_number]++;
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      orderMapping.push({
        order_number: orderId,
        flight_number: "",
        departure_city: "",
        arrival_city: "",
        day: "",
      });
    }
  }

  return orderMapping;
}

export function filteredOrderByFlight(flight_number: string, day: string) {
  const allOrders = orderWithFlightData();

  return allOrders.filter(order => order.flight_number === flight_number && order.day === day)
}