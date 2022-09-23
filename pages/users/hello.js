//pages - api 폴더에 있는 js 파일은 그대로 서버가 된다.
//request(요청), response(응답)
export default function hello(req, res) {
  res.send("hello world");
}
