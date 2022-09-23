//pages - api 폴더에 있는 js 파일은 그대로 서버가 된다.
//api 폴더의 특별한 인자들.
//request(요청), response(응답)
//서버 입장에서 받는 게 요청, 보내는게 응답
//함수명은 뭐든 가능한데 기본적으로는 핸들러 라고 한다.

//req.method : api 요청 시 어떤 방식으로 요청하느냐를 받음,
//postman 의 GET, POST, DELETE.
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.json(
        "https://api.themoviedb.org/3/movie/popular?api_key=3d6a0c3b9d0f8c74a2c6096b10bd3347&language=ko&region=KRhttps://api.themoviedb.org/3/movie/${props.apiPath}?api_key=3d6a0c3b9d0f8c74a2c6096b10bd3347&language=ko&region=KR"
      );
      break;
    case "POST":
      res.json({ ok: true, message: "Post Call" });
      break;
    case "DELETE":
      res.json({ ok: true, message: "Delete Call" });
      break;
  }
}
