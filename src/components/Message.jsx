import img from "../asset/image.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message__info">
        <img src={img} alt="" />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>hello</p>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Message;
