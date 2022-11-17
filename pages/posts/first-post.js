import Link from "next/link";

// pages 폴더 아래의 폴더 경로가 url로 이루어진다.
const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
