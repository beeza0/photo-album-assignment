import express from "express";
import axios from "axios";

const router = express.Router();
const API_URL = "https://jsonplaceholder.typicode.com";

router.get("/:albumId", async (req, res) => {
  const { albumId } = req.params;
  const photos = await axios.get(`${API_URL}/album/${albumId}/photos`);
  res.send(photos.data);
});

router.post("/create", async (req, res) => {
  const { albumId, title, url } = req.body;
  const response = await axios.post(`${API_URL}/photos`, {
    albumId,
    title,
    url,
  });
  res.send(response.data);
});

module.exports = router;
