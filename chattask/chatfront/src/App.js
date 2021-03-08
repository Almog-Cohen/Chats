import React, { useState, useEffect } from "react";
import Chat from "./components/Chat/Chat";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const [roomNumber, setRoomNumber] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage userName={userName} setUserName={setUserName} />
          </Route>
          <Route path="/chat">
            <div className="app-body">
              <Sidebar setRoomNumber={setRoomNumber} />
              {roomNumber && (
                <Chat roomNumber={roomNumber} userName={userName} />
              )}
            </div>
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
