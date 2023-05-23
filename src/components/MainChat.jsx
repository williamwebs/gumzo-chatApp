import { BsCameraVideoFill, BsFillPersonPlusFill } from "react-icons/bs";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { Input, Messages } from "./Index";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const MainChat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="main__chat">
      <div className="chat__info">
        <span>{data.user?.displayName}</span>
        <div className="chat__icons">
          <BsCameraVideoFill className="icon" />
          <BsFillPersonPlusFill className="icon" />
          <IoEllipsisHorizontalSharp className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default MainChat;
