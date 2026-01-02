import "./LoginLayout.css";
import yarnBall from "../assets/yarn-ball-image.svg";

function LoginLayout() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="login-veeloops">

      {/* LEFT PANEL — DESKTOP */}
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

        <form className="login-form" onSubmit={handleSubmit}>
          <button type="submit" className="login-button">
            Let me in 🧶
          </button>
        </form>
      </section>

    </main>
  );
}

export default LoginLayout;
