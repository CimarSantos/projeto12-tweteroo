import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

const users = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("ok");
});

app.listen(PORT, console.log(`Tweeteroo running on port ${PORT}`));
