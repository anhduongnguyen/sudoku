import React from "react";

// Box that generates a message of the name and icon popped up 
const ChatBox = ({ messages }) => {
    return (
      <div className="chat-box">
        <h3>chat</h3>
        <div className="chat-messages">
          {[...messages].reverse().map((message, index) => (
            <div key={index} className="chat-message">
              <img src={message.icon} alt="icon" className="chat-icon" />
              <p>{message.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ChatBox;