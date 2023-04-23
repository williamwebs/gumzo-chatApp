import { signOut } from "firebase/auth";
import img from "../asset/image.jpg";
import { auth } from "../config/Index";

const Navbar = () => {
  return (
    <div className="nav__bar">
      <span className="logo">gumzo</span>
      <div className="user">
        <img src={img} alt="" />
        <span>William</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
