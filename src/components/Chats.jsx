import { useState } from "react";
import img from "../asset/image.jpg";

const Chats = () => {
  //states for mobile
  const [mobile, setMobile] = useState(true);

  // handle openChat
  const openChat = () => {
    console.log("clicked");
  };

  return (
    <div className="chats">
      <div className="user__chat" onClick={mobile ? openChat : ""}>
        <img src={img} alt="" />
        <div className="user__chat__info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      {/*  */}
      <div className="user__chat">
        <img src={img} alt="" />
        <div className="user__chat__info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      {/*  */}
      <div className="user__chat">
        <img src={img} alt="" />
        <div className="user__chat__info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Chats;
