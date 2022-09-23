import Counter from "../components/Counter";
import Link from "next/link";
import { useRouter } from "next/router";
import { cls, add } from "../libs/utils";

//cls 함수 : 입력 받은 배열을 공백으로 분리된 배열로 리턴한다.
// - 테일윈드 CSS 쓸 문장에 자바스크립트를 넣어서 cls함수로 조건식을 넣어서 조건에 따라 원하는 css 문장을 적용 가능하다.
export default function NavBar() {
  const router = useRouter();
  //내가 있는 경로를 알아내고 싶을 땐 useRouter Hook으로 pathname 인자를 쓴다.
  console.log(router.pathname);

  return (
    <>
      <nav>
        <ul className="flex justify-between px-5 bg-slate-400 ">
          <li>
            <Link href="/">
              <a className={cls(router.pathname === "/" ? "bg-red-500" : "")}>
                홈
              </a>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a
                className={cls(
                  router.pathname === "/counter" ? "bg-red-500" : ""
                )}
              >
                카운터
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={cls(
                  router.pathname === "/about" ? "bg-red-500" : ""
                )}
              >
                개발자 소개
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a
                className={cls(
                  router.pathname === "/users" ? "bg-red-500" : ""
                )}
              >
                유저 리스트
              </a>
            </Link>
          </li>

          <li>
            <Link href="/users/ssr">
              <a
                className={cls(
                  router.pathname === "/users/ssr" ? "bg-red-500" : ""
                )}
              >
                유저 리스트(SSR)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <a
                className={cls(router.pathname === "/test" ? "bg-red-500" : "")}
              >
                쪽지시험
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
