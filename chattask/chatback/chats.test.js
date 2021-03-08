const { isPlayerExists } = require("./chats");
// players exiss in the chat room
dbMockplayersInChatRoomOne = ["almog", "roy", "David"];

// I assume thats isPlayerExists getting data like this:
// isPlayerExists(dbMockplayersInChatRoomOne,userName:"David",roomId: id )
// The function should return true if the user exists otherwise add him and false

// The soultion of this should pass the test by true value
it("Is the user exists in the room", () => {
  expect(isPlayerExists(dbMockplayersInChatRoomOne, "David", id).toEqual(true));
});

//// The soultion of this should fail the test becuase its return false
it("Is the user exists in the room", () => {
  expect(isPlayerExists(dbMockplayersInChatRoomOne, "Dan", id).toEqual(true));
});
