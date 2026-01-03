import "./LoginLayout.css";
import "./LoginLayout.mobile.css";
import yarnBall from "../assets/yarn-ball-image.svg";

function LoginLayout() {
  return (
    <main className="login-veeloops">

      {/* DESKTOP LEFT PANEL */}
      <aside className="left-panel">
        <img
          src={yarnBall}
          alt="Yarn illustration"
          className="yarn-ball-image"
        />
      </aside>

      {/* LOGIN CARD */}
      <section className="login-card">
        <p className="subtitle">Enter your craft corner</p>
        <h1 className="title">VeeLoops</h1>
        <p className="byline">-by vaish</p>

        <form className="login-form">
          <input className="input-username" placeholder="username" />
          <input className="input-password" placeholder="password" />
          <button className="login-button">Let me in 🧶</button>
        </form>
      </section>

    </main>
  );
}

export default LoginLayout;

