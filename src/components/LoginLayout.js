import { useNavigate } from "react-router-dom";
import "./LoginLayout.css";
import "./LoginLayout.mobile.css";
import yarnBall from "../assets/yarn-ball-image.svg";

function LoginLayout() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP LOGIN LOGIC (for now)
    // Later we will connect backend here
    navigate("/dashboard");
  };

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

        {/* IMPORTANT: onSubmit added */}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="input-username"
            placeholder="username"
          />
          <input
            className="input-password"
            type="password"
            placeholder="password"
          />

          {/* IMPORTANT: type="submit" */}
          <button className="login-button" type="submit">
            Let me in 🧶
          </button>
        </form>
      </section>

    </main>
  );
}

export default LoginLayout;
