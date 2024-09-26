import { IndexTable, Text } from "@shopify/polaris";
import { OrdersWithFlightInfo } from "../types";

interface Props {
  orders: OrdersWithFlightInfo[];
}

export function OrdersTable({ orders }: Props) {
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const rowMarkup = orders.map(
    (
      { order_number, flight_number, departure_city, arrival_city, day },
      index
    ) => (
      <IndexTable.Row
        id={flight_number.toString()}
        key={order_number}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order_number}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{flight_number}</IndexTable.Cell>
        <IndexTable.Cell>{departure_city}</IndexTable.Cell>
        <IndexTable.Cell>{arrival_city}</IndexTable.Cell>
        <IndexTable.Cell>{day}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={orders.length}
      headings={[
        { title: "Order" },
        { title: "Flight" },
        { title: "Departure" },
        { title: "Arrival" },
        { title: "Day" },
      ]}
      selectable={false}
    >
      {rowMarkup}
    </IndexTable>
  );
}
