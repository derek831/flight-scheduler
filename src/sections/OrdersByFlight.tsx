import { Page, Text, InlineStack, Button } from "@shopify/polaris";
import { OrdersTable } from "../components/OrdersTable";
import { filteredOrderByFlight } from "../utils";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function OrdersByFlight() {
  const { flight, day } = useParams();

  if (!flight || !day) {
    return <div>Error: Missing flight or day data</div>;
  }

  const orders = filteredOrderByFlight(flight, day);

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
