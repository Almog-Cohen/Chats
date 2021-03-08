import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { Avatar } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";

const styles = {
  width: "100%",
};

const Sidebar = ({ setRoomNumber }) => {
  return (
    <div className="side-bar">
      <div className="side-bar-header">
        <Avatar />
        <div className="side-bar-headerRight"></div>
      </div>

      <div className="side-bar-search">
        <div className="side-bar-searchContainer">Channels</div>
      </div>

      <div className="side-bar-chats">
        <ButtonBase style={styles} onClick={() => setRoomNumber(1)}>
          <SidebarChat roomName={"Room 1"} />
        </ButtonBase>
        <ButtonBase style={styles} onClick={() => setRoomNumber(2)}>
          <SidebarChat roomName={"Room 2"} />
        </ButtonBase>
      </div>
    </div>
  );
};

export default Sidebar;
