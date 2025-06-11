export default async function handler(req, res) {
  const { prompt } = req.query;

  let reply = "Neviem, čo odpovedať.";
  if (prompt?.toLowerCase().includes("ahoj")) {
    reply = "Zdravím, tu FreakBot!";
  } else if (prompt?.toLowerCase().includes("kto si")) {
    reply = "Som tvoj Web3 AI asistent FreakBot.";
  }

  return res.status(200).json({
    message: reply,
    avatar: "/avatar.png",
  });
}
