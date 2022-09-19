import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme, withDefaultSize } from "@chakra-ui/react";

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
}: AppProps<{ session: Session }>) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}
