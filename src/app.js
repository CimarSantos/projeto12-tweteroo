import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("ok");
});

app.get("/sign-up", (req, res) => {
  const username = req.body.username;
  res.send(users);
  console.log(username);
});

app.post("/tweets", (req, res) => {
  const username = req.body.username;
  const signedUser = users.find((user) => user.username === username);
  if (!signedUser) {
    res.send("UNAUTHORIZED");
    return;
  }
  const tweet = req.body;
  tweets.push(tweet);
  res.send("ok");
});

app.get("/tweets", (_, res) => {
  res.send(tweets);
});

app.listen(PORT, console.log(`Tweeteroo running on port ${PORT}`));
