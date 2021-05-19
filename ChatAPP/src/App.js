import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import Login from "./components/Login";
export default function App() {
  if (!localStorage.getItem("username")) {
    return <Login />;
  }
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="bfecc05e-6548-4e29-8438-8f56d6c82dbc"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <button>Logout</button>
    </>
  );
}
