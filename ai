import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const API_KEY = "0ecbb07ef321688c1acd88aa90b51481f00f41a0";

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
