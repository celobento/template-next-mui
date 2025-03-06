import { Container } from "@mui/material";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../Header";
import scss from "./Layout.module.scss";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.layout}>
        <Header />
        <Container>
          {/*{session && <SideMenu />*/}
          {props.children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
