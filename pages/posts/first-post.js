import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Layout from "../../components/Layout";

// pages 폴더 아래의 폴더 경로가 url로 이루어진다.
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>

      <Image src="/images/example.jpg" width={200} height={200} alt="profile" />
    </Layout>
  );
};

export default FirstPost;
