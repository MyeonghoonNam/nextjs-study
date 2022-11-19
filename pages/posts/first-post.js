import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// pages 폴더 아래의 폴더 경로가 url로 이루어진다.
const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src="/images/example.jpg" width={200} height={200} alt="profile" />
    </>
  );
};

export default FirstPost;
