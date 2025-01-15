import express from "express";
import axios from "axios";

const router = express.Router();
const API_URL = "https://jsonplaceholder.typicode.com/users";

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const albums = await axios.get(`${API_URL}/${userId}/albums`);
  res.send(albums.data);
});

module.exports = router;
