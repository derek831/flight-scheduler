import { Text } from "@shopify/polaris";

interface Props {
  message: string;
}

export function ErrorMessage({ message }: Props) {
  return (
    <Text as="p" variant="bodyMd">
      Error: {message}
    </Text>
  );
}
