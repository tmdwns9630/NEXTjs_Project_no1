export default function handler(req, res) {
  console.log(req.query);

  res.json({ ok: true, message: "Post Call" });
}
