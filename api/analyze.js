import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const API_KEY = "b268eee263e693cf6299faf33bf31fff88a9c93f";

  try {
    const { image } = req.body;

    const response = await axios.post(
      "https://api.logmeal.es/v2/recognition/dish",
      { image },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.response?.data || "LogMeal request failed" });
  }
}
