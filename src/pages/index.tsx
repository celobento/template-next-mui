import { useSession } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Dashboard from "./dashboard";
import scss from "./Home.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <>
      <main className={scss.main}>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
      </main>
    </>
  );
};

export default Home;
