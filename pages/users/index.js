import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function Page() {
  const [users, setUsers] = useState([]);

  //axios로 api 주소를 (fetch)가져왔다
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
    console.log("useEffect 발동");
  }, []);
  //useEffect(콜백함수,배열);
  //

  //  console.log(`콘솔점로그 : ${users}`);
  console.log(users[0]);

  //api 배열 출력 --> map
  //map을 쓸 때는 key값이 요구된다. map 2번째 인자 idx를 쓰거나 api 값 중 택.

  //화살표 함수에서 중괄호를 쓰면 여러 줄 쓸 수 있지만 명확하게 return과 ;을 써야한다.
  //중괄호를 안 쓰면 그 한 문장이 바로 간다.(return ; 반드시 뺄 것)
  //변수명? -> 변수가 없으면 ? 뒤는 하지 마라.0
  return (
    <Layout>
      <div>사용자 목록 페이지###########################################.</div>
      {0 == users.length ? (
        <div className="text-red-700 text-2xl">로딩 중</div>
      ) : null}
      {users?.map((user) => (
        <div key={user.id} className="border m-5 p-3">
          <div className="text-2xl font-bold">{user.username}</div>
          <div>{user.name}</div>
          <div className="text-gray-600">{user.email}</div>
          <a href={`https://{user.website}`}>{user.website}</a>
        </div>
      ))}
    </Layout>
  );
}
