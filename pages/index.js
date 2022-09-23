import Head from "next/head";
import Counter from "../components/Counter";
import Link from "next/link";

import Layout from "../components/Layout";

export default function Page() {
  return (
    <>
      <Layout>
        <div>hello Boys</div>
      </Layout>
    </>
  );
}

// next.js로 오면서 <Link to=>에서 <a href> 추가로 변경.
