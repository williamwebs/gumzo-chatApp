import img from "../asset/image.jpg";

const Navbar = () => {
  return (
    <div className="nav__bar">
      <span className="logo">gumzo</span>
      <div className="user">
        <img src={img} alt="" />
        <span>William</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
