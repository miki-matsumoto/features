import { Button, Box, Heading } from "@chakra-ui/react";
import { signIn, getSession } from "next-auth/react";
import { NextPageContext } from "next";

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

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return { redirect: { permanent: false, destination: "/" } };
  }
  return { props: {} };
}

export default Login;
