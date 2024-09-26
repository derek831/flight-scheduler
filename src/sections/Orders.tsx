import { Page, Button, Text, InlineStack } from "@shopify/polaris";
import { OrdersTable } from "../components/OrdersTable";
import { orderWithFlightData } from "../utils";
import { Link } from "react-router-dom";

export function Orders() {
  const orders = orderWithFlightData();

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
