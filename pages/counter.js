import { useState } from "react";
import Layout from "../components/Layout";

export default function counter() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>페이지 카운터</div>
      <div>카운터 {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </Layout>
  );
}
