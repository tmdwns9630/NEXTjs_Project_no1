//동적 라우팅
//주소를 동적으로 구성하고 싶을 때 사용한다.
//[] 부분에 뒤에 숫자, 문자가 오면서 주소가 된다.
//ex) hiyuvi.me/gallery/1353224

//[...id] : ... 을 넣으면 [gallery,12323]으로 배열로 들어온다.
export default function handler(req, res) {
  console.log(req.query);

  // http://localhost:3000/api/users/csj?api_key=9999&lang=ko&regin=KOR
  //의 키값들을 구조 분해 할당하는 js 문법이다.
  const {
    query: { api_key, lang, region, id },
  } = req;

  console.log(api_key);
  console.log(lang);
  console.log(region);
  console.log(id);

  //이걸 보기 쉽게 만들기 위해 나온 ex6 문법
  const [myProfile, myIp] = req.query.id;

  res.json({ ok: true, message: "Post Call" });
}
