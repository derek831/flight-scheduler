import { IndexTable, Text, Button, Link } from "@shopify/polaris";
import type { Flight } from "../types";

interface Props {
  flights: Flight[];
  day: string;
}

export function FlightsTable({ flights, day }: Props) {
  const resourceName = {
    singular: "flight",
    plural: "flights",
  };

  const rowMarkup = flights.map(
    ({ flight_number, departure_city, arrival_city }, index) => (
      <IndexTable.Row
        id={flight_number.toString()}
        key={flight_number}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {flight_number}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{departure_city}</IndexTable.Cell>
        <IndexTable.Cell>{arrival_city}</IndexTable.Cell>
        <IndexTable.Cell>
          <Link url={`/flight/${flight_number}/day/${day}`}>
            <Button>View Flight</Button>
          </Link>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <div>
      <Text variant="headingSm" as="h3">
        Scheduled flights for day {day.toString()}
      </Text>
      <IndexTable
        resourceName={resourceName}
        itemCount={flights.length}
        headings={[
          { title: "Flight" },
          { title: "Departure" },
          { title: "Arrival" },
          { title: "View Flight" },
        ]}
        selectable={false}
      >
        {rowMarkup}
      </IndexTable>
    </div>
  );
}
