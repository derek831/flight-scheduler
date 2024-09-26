import "@shopify/polaris/build/esm/styles.css";
import { Flights } from "./sections/Flights";
import { Orders } from "./sections/Orders";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { OrdersByFlight } from "./sections/OrdersByFlight";
import { useFlightOrderData } from "./hooks/useFlightOrderData";
import { FlightOrderContext } from "./FlightOrderContext";

function App() {
  const {
    data: flightData,
    loading: flightDataLoading,
    error: flightDataError,
  } = useFlightOrderData("http://localhost:3001/flights");

  const {
    data: orderData,
    loading: ordersDataLoading,
    error: ordersDataError,
  } = useFlightOrderData("http://localhost:3001/orders");

  console.log(flightData);

  return (
    <FlightOrderContext.Provider value={{ flightData, orderData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Flights />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/flight/:flight/day/:day" element={<OrdersByFlight />} />
        </Routes>
      </Router>
    </FlightOrderContext.Provider>
  );
}

export default App;
