import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeContextProvider>
    </>
  );
}
