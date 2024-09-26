import "@shopify/polaris/build/esm/styles.css";
import { Flights } from "./sections/Flights";
import { Orders } from "./sections/Orders";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { OrdersByFlight } from "./sections/OrdersByFlight";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flights />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/flight/:flight/day/:day" element={<OrdersByFlight />} />
      </Routes>
    </Router>
  );
}

export default App;
