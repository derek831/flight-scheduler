import { Page, BlockStack, Button, InlineStack, Text } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { FlightsTable } from "../components/FlightsTable";
import { groupFlightsByDay } from "../utils";

export function Flights() {
  const flightsByDay = groupFlightsByDay();

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
        <Link to="/orders">
          <Button variant="primary">VIEW ORDER SCHEDULE</Button>
        </Link>
      }
    >
      <BlockStack gap="400">
        {Object.entries(flightsByDay).map(([day, flights]) => (
          <FlightsTable day={day} flights={flights} key={day} />
        ))}
      </BlockStack>
    </Page>
  );
}
