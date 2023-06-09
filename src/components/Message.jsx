import { useContext, useEffect, useRef } from "react";
import img from "../asset/image.jpg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  // console.log(message.date.toLocaleDateString());
  const date = message.date
  // console.log(date);


  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavour: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message__info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
