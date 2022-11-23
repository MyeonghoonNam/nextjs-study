import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi~ There~!</p>
        <p>
          (This is a sample website{" "}
          <Link href="/posts/first-post">my first post</Link>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
