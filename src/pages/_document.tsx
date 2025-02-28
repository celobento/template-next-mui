import { Head, Html, Main, NextScript } from "next/document";

export const metadata = {
  title: "My Dynamic Title",
  description: "A description for the page",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
