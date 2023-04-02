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
        <div className={styles.about + " container"}>
          {/* <h1>ActualOne Protocol</h1> */}
          <hr />
          Actual01 offers a collaborative bounty system that incentivizes
          builders, while also building personalized proof-of-work profiles that
          connect individuals with opportunities in the web3 ecosystem.
          <hr />
          <br />
          {/* Mission */}
          <h2>🧭 Mission</h2>
          <hr />
          <p>
            Despite the scattered opportunities and lack of execution due to
            expertise in the past, Actual01 now provides a collaborative
            platform that incentivizes builders to work together on bounties and
            build their proof of work profile, showcasing their true value
            beyond a mere job title or bio. With Actual01, your contributions
            and execution toward innovative ideas speak for themselves, giving
            you the recognition you deserve. Say goodbye to meaningless LinkedIn
            bios and hello to a community that values your actual work.
          </p>
          Today Actual01 Protocol is 2 layers:
          <p>
            1. Application <br />
            2. Community
          </p>
          <p>and we aim to develop that protocol layer in coming seasons</p>
          <p>
            Our mission at Actual01 is to empower the next generation of
            builders and change makers by creating a decentralized ecosystem
            that values collaboration and proof of work, providing better
            opportunities for success.
          </p>
          <p>
            Our vision at Actual01 is to enable a more connected and
            collaborative web3 ecosystem by providing a platform that brings
            together individuals, communities, and organizations. And to empower
            and incentivize participation in the web3 space by providing a
            transparent and decentralized bounty aggregation system, as well as
            personalized proof-of-work profiles that showcase skills,
            contributions, and potential. We strive to create a fair,
            merit-based environment that promotes innovation, diversity, and
            social impact. - Actual Protocol application you would see.
          </p>
          <p>
            Our vision for Actual01 is to create a decentralized ecosystem that
            fosters collaboration and promotes merit-based participation in the
            web3 space, with a focus on showcasing skills, contributions, and
            potential through personalized proof-of-work profiles. Also our
            vision is to build a community around a certain ideology and not a
            product, our users are community and not customers.
          </p>
          <p>
            Although it will take years to build, our current focus is on
            steering the early development of the protocol and creating valuable
            applications on top of it.
          </p>
          {/*  */}
        </div>
      </main>
    </>
  );
}
