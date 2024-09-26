import { createContext } from "react";
import { Flight, Orders } from "./types";

interface ContextType {
  flightData?: Flight[] | null;
  orderData?: Orders | null;
}

export const FlightOrderContext = createContext<ContextType | null>(null);
