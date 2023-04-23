import "../../style.scss";

const Login = () => {
  return (
    <section className="form__container">
      <div className="form__wrapper">
        <span className="logo">gumzo</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
        {/* loader */}
        {/* <div className="loader__wrapper">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Login;
