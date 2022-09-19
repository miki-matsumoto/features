import { getSession } from "next-auth/react";
import { NextPageContext } from "next";

export default function RedirectPage() {
  return <></>;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return { redirect: { permanent: false, destination: "/auth/login" } };
  }
  return { props: { hello: true } };
}
