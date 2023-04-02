import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>ActualOne Protocol</title>
        <meta name="description" content="Description" />
        <meta
          name="keywords"
          content="actualone, actual01, actual 101, collaboration, bounty, protocol"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
      </main>
    </>
  );
}
