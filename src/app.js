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

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  const signedUser = users.find((user) => user.username === tweet.username);

  if (!signedUser) {
    res.send("UNAUTHORIZED");
    return;
  }

  tweets.unshift({
    ...tweet,
    avatar: signedUser.avatar,
  });

  tweets.push(tweet);
  res.send("ok");
});

app.get("/tweets", (_, res) => {
  if (tweets.length <= 10) {
    res.send(tweets);
  } else {
    res.send(tweets.splice(0, 10));
  }
});

app.listen(PORT, console.log(`Tweeteroo running on port ${PORT}`));

