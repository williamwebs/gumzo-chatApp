import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/Index";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  //states for mobile
  const [mobile, setMobile] = useState(true);
  const [chats, setChats] = useState([]);

  const currentUser = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  console.log(dispatch);
  console.log(chats);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));

  // handle openChat
  const openChat = () => {
    console.log("clicked");
  };

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {Object.entries(chats).map((chat) => {
        return (
          <div
            className="user__chat"
            // onClick={mobile ? openChat : ""}
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="user__chat__info">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].userInfo.lastMessage?.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
