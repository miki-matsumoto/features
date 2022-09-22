import { Box, Button, useDisclosure, Flex, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { NextPageWithLayout } from "next";
import { PageHeader } from "../../../components/PageHeader";
import { AppsLayout } from "../../../layouts";

const HEADER_HEIGHT = 64;

const Plans: NextPageWithLayout = () => {
  const { onOpen } = useDisclosure();

  return (
    <Box h="full">
      <PageHeader
        title="Plans"
        description="This is plans page"
        rightAlignedComponent={
          <Box>
            <AddPlanButton handleClick={onOpen} />
          </Box>
        }
      />
      <Flex
        h={`calc(100% - ${HEADER_HEIGHT}px)`}
        justifyContent="center"
        alignItems="center"
      >
        <PlanEmptyState handleClick={onOpen} />
      </Flex>
    </Box>
  );
};

const AddPlanButton = ({ handleClick }: { handleClick: () => void }) => (
  <Button onClick={handleClick} leftIcon={<AddIcon />}>
    New
  </Button>
);

const PlanEmptyState = ({ handleClick }: { handleClick: () => void }) => (
  <Box textAlign="center">
    <Heading fontSize="lg">Create first plan</Heading>
    <AddPlanButton handleClick={handleClick} />
  </Box>
);

Plans.getLayout = (page) => <AppsLayout>{page}</AppsLayout>;

export default Plans;
