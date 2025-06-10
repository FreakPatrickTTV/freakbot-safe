
export default async function handler(req, res) {
  return res.status(200).json({
    message: "Som FreakBot v offline režime. Pripojenie k AI momentálne nie je dostupné.",
    avatar: "/avatar.png"
  });
}
