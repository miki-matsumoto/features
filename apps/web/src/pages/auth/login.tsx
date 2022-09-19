import { Button, Box, Heading } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <Box
      height="100vh"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box>
        <Box mb={8}>
          <Heading textAlign="center">Welcome back</Heading>
        </Box>
        <Box bg="white" py={12} px={24} rounded="6px">
          <Button
            variant="outline"
            onClick={async () => await signIn("google")}
          >
            Login in with Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
