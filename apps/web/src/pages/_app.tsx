import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme, withDefaultSize } from "@chakra-ui/react";
import type { AppPropsWithLayout } from "next/app";

const theme = extendTheme(
  {
    components: {
      Input: {
        sizes: {
          sm: {
            field: {
              borderRadius: "6px",
            },
          },
        },
      },
    },
  },
  withDefaultSize({
    size: "sm",
    components: ["Button", "Input", "NumberInput"],
  })
);

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} session={session} />)}
      </SessionProvider>
    </ChakraProvider>
  );
}
