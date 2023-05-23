import { useContext, useEffect, useState } from "react";
import { Message } from "./Index";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/Index";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data());
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => {
        return <Message messages={m} />;
      })}
    </div>
  );
};

export default Messages;
