import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  rightAlignedComponent?: ReactNode;
};

export const PageHeader = ({
  title,
  description,
  rightAlignedComponent,
}: Props) => (
  <Box
    w="full"
    h="64px"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box>
      <Heading>{title}</Heading>
      {description && <Text>{description}</Text>}
    </Box>
    <Box>{rightAlignedComponent && rightAlignedComponent}</Box>
  </Box>
);
