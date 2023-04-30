import { signOut } from "firebase/auth";
import img from "../asset/image.jpg";
import { auth } from "../config/Index";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const  currentUser  = useContext(AuthContext);
  // console.log(currentUser);

  return (
    <div className="nav__bar">
      <span className="logo">gumzo</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
