import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { NextPage } from "next";
import { PageHeader } from "../../../components/PageHeader";

const Plans: NextPage = () => {
  const { onOpen } = useDisclosure();

  return (
    <Box>
      <PageHeader
        title="Plans"
        description="This is plans page"
        rightAlignedComponent={
          <Box>
            <AddPlanButton handleClick={onOpen} />
          </Box>
        }
      />
      <Box>
        <PlanEmptyState handleClick={onOpen} />
      </Box>
    </Box>
  );
};

const AddPlanButton = ({ handleClick }: { handleClick: () => void }) => (
  <Button onClick={handleClick} leftIcon={<AddIcon />}>
    New
  </Button>
);

const PlanEmptyState = ({ handleClick }: { handleClick: () => void }) => (
  <Box>
    <AddPlanButton handleClick={handleClick} />
  </Box>
);

export default Plans;
