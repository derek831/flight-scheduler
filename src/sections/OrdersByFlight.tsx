import { useContext } from "react";
import { FlightOrderContext } from "../FlightOrderContext";
import { Page, Text, InlineStack, Button } from "@shopify/polaris";
import { OrdersTable } from "../components/OrdersTable";
import { ErrorMessage } from "../components/ErrorMessage";
import { filteredOrderByFlight } from "../utils";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function OrdersByFlight() {
  const { flight, day } = useParams();
  const context = useContext(FlightOrderContext);

  if (!context?.flightData) {
    return <ErrorMessage message="no flight data found" />;
  }

  if (!context?.orderData) {
    return <ErrorMessage message="no order data found" />;
  }

  if (!flight) {
    return <ErrorMessage message="no flight number found" />;
  }

  if (!day) {
    return <ErrorMessage message="no day found" />;
  }

  const orders = filteredOrderByFlight(
    flight,
    day,
    context.flightData,
    context.orderData
  );

  return (
    <Page
      titleMetadata={
        <InlineStack blockAlign="end" gap="200">
          <Text as="h3" variant="headingLg">
            Transport.ly
          </Text>
          <Text as="h3" variant="headingMd">
            An automated air flight scheduling service
          </Text>
        </InlineStack>
      }
      primaryAction={
        <Link to="/">
          <Button variant="primary">BACK TO FLIGHT SCHEDULE</Button>
        </Link>
      }
    >
      <Text variant="headingSm" as="h3">
        Flight
      </Text>
      <OrdersTable orders={orders} />
    </Page>
  );
}
