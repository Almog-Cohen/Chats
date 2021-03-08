const chatRoomOne = [];
const playersInChatRoomOne = [];
const chatRoomTwo = [];
const playersInChatRoomTwo = [];

// Add new message to room chat collection by id
const addNewChatMessage = (req, res) => {
  const { id } = req.params;

  if (id == 1) {
    chatRoomOne.push(req.body);
    return res.status(200).json(chatRoomOne);
  } else if (id == 2) {
    chatRoomTwo.push(req.body);
    return res.status(200).json(chatRoomTwo);
  } else {
    return res.status(404).json("Failed message");
  }
};

// Get all room chat messages
const getChatMessages = (req, res) => {
  const { id } = req.params;

  if (id == 1) {
    return res.status(200).json(chatRoomOne);
  } else if (id == 2) {
    return res.status(200).json(chatRoomTwo);
  } else {
    return res.status(404).json("Failed message");
  }
};
// Check if player exists in the chat room . if not it add him
const isPlayerExsits = (req, res) => {
  const { id } = req.params;
  const { userName } = req.body;

  if (id == 1) {
    if (playersInChatRoomOne.includes(userName)) {
      return res.status(200).json("userExists");
    } else {
      playersInChatRoomOne.push(userName);
      return res.status(200).json(`Welcome ${userName} to room: ${id} `);
    }
  } else if (id == 2) {
    if (playersInChatRoomTwo.includes(userName)) {
      return res.status(200).json("userExists");
    } else {
      playersInChatRoomTwo.push(userName);
      return res.status(200).json(`Welcome ${userName} to room: ${id} `);
    }
  } else {
    return res.status(400).json("Failed message");
  }
};

module.exports = { addNewChatMessage, getChatMessages, isPlayerExsits };
