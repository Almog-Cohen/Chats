const express = require("express");
const cors = require("cors");
const {
  addNewChatMessage,
  getChatMessages,
  isPlayerExsits,
} = require("./chats");

const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Server run");
});

app.post("/chat/:id", (req, res) => {
  addNewChatMessage(req, res);
});

app.get("/chat/:id", (req, res) => {
  getChatMessages(req, res);
});

app.post("/playerExists/:id", (req, res) => {
  isPlayerExsits(req, res);
});

app.listen(PORT, () => {
  console.log(`app is runing on port ${PORT}`);
});
