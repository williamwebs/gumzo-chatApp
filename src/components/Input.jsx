import { AiOutlineAudio, AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile, BsImageFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import "./input.scss";

const Input = () => {
  //  function where the predictive model os going to sit
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <AiOutlinePaperClip className="icon" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BsImageFill className="icon" />
        </label>
        <label htmlFor="emoji__btn">
          <BsEmojiSmile className="icon" />
        </label>
        <label htmlFor="emoji__btn">
          <AiOutlineAudio className="icon" />
        </label>
        {/* <EmojiPicker className="emoji__" /> */}

        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
