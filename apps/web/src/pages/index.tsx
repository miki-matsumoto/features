import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import { Button } from "@chakra-ui/react";

export default function RedirectPage() {
  return <Button onClick={() => signOut()}>sign out</Button>;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return { redirect: { permanent: false, destination: "/auth/login" } };
  }
  return { props: { hello: true } };
}
