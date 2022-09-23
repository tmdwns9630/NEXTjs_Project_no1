//default가 없다.
//여러 함수를 export, 내보낼 수 있다.

export function cls(...str) {
  return str.join(" ");
}
//cls 함수 : 입력 받은 배열을 공백으로 분리된 배열로 리턴한다.
// - 테일윈드 CSS 쓸 문장에 자바스크립트를 넣어서
//   cls함수로 조건식을 넣어서 조건에 따라 원하는 css 문장을 적용 가능하다.

export function add(a, b) {
  return a + b;
}

//import {cls, add} from "../libs/utils"
//내보낼 컴포넌트에 이런 식으로 import하여 다수의 함수를 import 된다.
//자바스크립트에서는 변수와 함수 모두 객체로 보니까 가능하다.
//자동... 임포트 해줘...
//is not define은 대부분 import 문제
