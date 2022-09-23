import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function Page(props) {
  const [users, setUsers] = useState([]);
  console.log("컴포오오오넌트으으으으으ㅡ으");
  console.log(props.users);
  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //       setUsers(res.data);
  //     });
  //     console.log("useEffect 발동");
  //   }, []);
  //   //useEffect(함수,배열);

  return (
    // usestates로 가져온 user가 아닌, props로 받은 user를 넣는다.
    //즉, 이젠 useState도 필요 없다, 이 말이에요.
    //html 파일을 다 구성해서 클라이언트에게 보낸다.
    //SEO(검색 엔진 최적화)
    //클라이언트  사이드 랜더링은 검색 봇이 방문하면 html 페이지는 글자가 없다.
    // 봇 입장에선 알 수 없는걸 서버 사이드에서 랜더링해서 검색 봇이 찾기 용이하게 한다.
    //검색 엔진에 상점 페이지 등이 노출 잘되게 한다.
    <Layout>
      <div>사용자 목록 페이지.</div>
      {0 === props.users.length ? <div>SSR 로딩중</div> : null}
      {props.users.map((user) => (
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

export async function getStaticProps() {
  //console.log("asdabhdlsuifailshdlfh wa");
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //console.log(res.data[0]);
  return {
    props: {
      users: res.data,
      sunmoon: "선문대횾ㄷ",
    },
  };
}
//getServerSideProps : 정적인 props를 가져온다.
// 이 함수 이름은 대소문자까지 동일해야하며, 형태는 이걸로 고정이다.
// return { props: {} };
// pages는 따로 호출하지 않고 페이지로 나간다.
// 현 페이지의 컴포넌트에 props를 전달하는 방법이다.
