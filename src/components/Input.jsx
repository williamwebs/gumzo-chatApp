import { AiOutlinePaperClip } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <AiOutlinePaperClip className="icon" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BsImageFill className="icon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
