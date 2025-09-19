export default async function handler(req, res) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  console.log("API Key is set?", apiKey ? "Yes" : "No");

  if (!apiKey) {
    return res.status(500).json({ error: "API key not set in environment" });
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
