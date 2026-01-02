import "./LoginLayout.css";
import yarnBall from "../assets/yarn-ball-image.svg";

function LoginLayout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // backend hookup later
  };

  return (
    <main className="login-veeloops">

      {/* YARN IMAGE (visible on mobile & desktop) */}
      <img
        src={yarnBall}
        alt="Yarn illustration"
        className="yarn-ball-image"
      />

      {/* Left pink panel (DESKTOP ONLY) */}
      <aside className="left-panel"></aside>

      {/* Login card */}
      <section className="login-card">
        <p className="subtitle">Enter your craft corner</p>
        <h1 className="title">VeeLoops</h1>
        <p className="byline">-by vaish</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-username"
            placeholder="username"
          />

          <input
            type="password"
            className="input-password"
            placeholder="password"
          />

          <button type="submit" className="login-button">
            Let me in 🧶
          </button>
        </form>
      </section>

    </main>
  );
}

export default LoginLayout;
