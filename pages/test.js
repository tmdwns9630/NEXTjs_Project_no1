import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function test(props) {
  const [tajador, setTajador] = useState(5);
  console.log(`start set : ${tajador}`);
  function asdf() {
    const n = 555;
    setTajador(555);
    console.log(`1st set : ${tajador}`);

    setTajador(function (state) {
      console.log(`Second Fun : ${state + 1}`);
    });
    console.log(`2nd set : ${tajador}`);
  }

  useEffect(() => asdf(), []);

  return (
    <Layout>
      <div>쪽지시험</div>
    </Layout>
  );
}
