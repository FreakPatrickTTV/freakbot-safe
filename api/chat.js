export default async function handler(req, res) {
  const { message } = req.query;

  if (!message) {
    return res.status(400).json({ error: "Missing message parameter" });
  }

  const reply = `FreakBot v online režime odpovedá: "${message}"`;

  return res.status(200).json({
    message: reply,
    avatar: "/avatar.png"
  });
}
