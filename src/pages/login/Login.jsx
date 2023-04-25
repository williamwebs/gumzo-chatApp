import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/Index";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../style.scss";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // firebase signin with email password function
      await signInWithEmailAndPassword(auth, email, password);
      // upon successful signin, navigate to home page
      navigate("/");
      console.log("sign in successful");
    } catch (error) {
      setErr(true);
      console.log("fail sign in");
    }
  };

  return (
    <section className="form__container">
      <div className="form__wrapper">
        <span className="logo">gumzo</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
          {err && <span className="error__message">Something went wrong</span>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
