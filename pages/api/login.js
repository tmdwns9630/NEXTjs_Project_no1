const orgid = "fangjoker57";
const orgpw = "1234";

export default function handler(req, res) {
  console.log("=====================================");
  console.log(req.body);
  //const { id, pw } = req.query;
  const { id, pw } = req.body;

  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 메서드." });
  }

  if (!id) return res.json({ ok: false, message: "아이디를 입력하세요" });
  if (!pw) return res.json({ ok: false, message: "패스워드를 입력하세요" });

  console.log(id, pw);

  if (id === orgid && pw === orgpw) {
    res.json({ ok: true, message: "Login Complete" });
  } else {
    res.json({ ok: false, message: "아이디와 비번이 일치하지 않습니다." });
  }

  // res.json({ ok: true, message: "ok" });
}
