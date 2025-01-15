import express from "express";
import axios from "axios";

const router = express.Router();
const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  return await axios.get(API_URL);
};

const checkIfExist = async (username: string) => {
  const users = await getUsers();
  return users.data.find((user: any) => user.username === username);
};

router.get("/", async (req, res) => {
  const users = await getUsers();
  res.send(users.data);
});

router.post("/login", async (req, res) => {
  const { username } = req.body;
  const userFound = await checkIfExist(username);
  if (userFound) res.send(userFound);
  else res.send("User not found");
});

router.post("/create", async (req, res) => {
  const { username, email } = req.body;
  const userFound = await checkIfExist(username);
  if (userFound) res.send("User already exists");
  else {
    const response = await axios.post(API_URL, {
      username,
      email,
    });
    res.send(response.data);
  }
});

module.exports = router;
