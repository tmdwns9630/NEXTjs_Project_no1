//pages - api 폴더에 있는 js 파일은 그대로 서버가 된다.
//api 폴더의 특별한 인자들.
//request(요청), response(응답)
//서버 입장에서 받는 게 요청, 보내는게 응답
//함수명은 뭐든 가능한데 기본적으로는 핸들러 라고 한다.

//req.method : api 요청 시 어떤 방식으로 요청하느냐를 받음,
//postman 의 GET, POST, DELETE.

//query:질문 / DB에서 질의, 데이터를 요청한다는걸 의미한다.
export default function handler(req, res) {
  console.log(req.query);
  res.json({ ok: true, message: "Post Call" });
}
