import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import axios from "axios";

const Chat = ({ roomNumber, userName }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState("");
  const [userExsits, setUserExists] = useState(true);

  // Check if user exists in the room
  useEffect(() => {
    checkUserExists();
  }, [roomNumber]);

  // Render and fetch chat room data when room number change or every 3 seconds
  useEffect(() => {
    setMessages("");
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(interval);
  }, [roomNumber]);

  // Send message to the server and get the updated array as response
  const sendMessage = async (e) => {
    setUserExists(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3001/chat/${roomNumber}`,
        {
          message: input,
          name: userName,
          timestamp: new Date().getTime(),
        }
      );
      setMessages(response.data);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };
  // Formating the messages date and time
  const dateFormatter = (timeStamp) => {
    let date = new Date(timeStamp);
    let dateString =
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return dateString;
  };

  // Fetching data from the server
  // If user is new we send him a replay message
  // Getting as response the messages for the room chat
  const fetchData = async () => {
    try {
      const messagesData = await axios.get(
        `http://localhost:3001/chat/${roomNumber}`
      );

      messagesData.data.length > 0
        ? setMessages(messagesData.data)
        : setMessages("");
    } catch (error) {
      console.log(error);
    }
  };

  const checkUserLayout = (userName, messageName) => {
    if (userName === messageName) {
      return true;
    } else {
      return false;
    }
  };

  const checkUserExists = async () => {
    const responseUserExists = await axios.post(
      `http://localhost:3001/playerExists/${roomNumber}`,
      {
        userName: userName,
      }
    );

    if (responseUserExists.data !== "userExists") {
      // Add to message
      setUserExists(false);
    } else {
      setUserExists(true);
    }
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-header-info">
          <h3>Room {roomNumber}</h3>
        </div>
      </div>

      <div className="chat-body">
        {messages &&
          messages.map((message, i) => (
            <p
              key={i}
              className={`chat-message ${
                checkUserLayout(userName, message.name) && "chat-receiver"
              }`}
            >
              <Avatar />
              <span className="chat-name">{message.name}</span>
              {message.message}
              <span className="chat-timeStamp">
                {dateFormatter(message.timestamp)}
              </span>
            </p>
          ))}
        {!userExsits && (
          <p>
            Welcome {userName} to room {roomNumber}
          </p>
        )}
      </div>

      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
