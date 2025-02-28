import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import SideMenu from "../components/SideMenu";
import Dashboard from "./dashboard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const title = "My Dynamic Title"; // Your parameter
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="A description for the page" />
        </Head>
      </>
      <Header />
      <SideMenu />
      <Dashboard />
      <Login />
    </div>
  );
}
