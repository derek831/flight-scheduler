import { useContext } from "react";
import { FlightOrderContext } from "../FlightOrderContext";
import { Page, Button, Text, InlineStack } from "@shopify/polaris";
import { OrdersTable } from "../components/OrdersTable";
import { ErrorMessage } from "../components/ErrorMessage";
import { orderWithFlightData } from "../utils";
import { Link } from "react-router-dom";

export function Orders() {
  const context = useContext(FlightOrderContext);

  if (!context?.flightData) {
    return <ErrorMessage message="no flight data found" />;
  }

  if (!context?.orderData) {
    return <ErrorMessage message="no order data found" />;
  }

  const orders = orderWithFlightData(context?.flightData, context?.orderData);

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
          <Button variant="primary">VIEW FLIGHT SCHEDULE</Button>
        </Link>
      }
    >
      <Text variant="headingSm" as="h3">
        Orders
      </Text>
      <OrdersTable orders={orders} />
    </Page>
  );
}
