import "./Dashboard.css";
import "./Dashboard.mobile.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Welcome,Vee🌷</h1>
        <p>here’s what your yarn world looks like today</p>
      </div>

      <div className="dashboard-cards">

        <div className="cards-row">
          <div className="dashboard-card yarn">
            <div className="card-content">
              <span className="card-title">yarn stash</span>
              <span className="card-number">42</span>
            </div>
          </div>

          <div className="dashboard-card hooks">
            <div className="card-content">
              <span className="card-title">hooks</span>
              <span className="card-number">6</span>
            </div>
          </div>

          <div className="dashboard-card wips">
            <div className="card-content">
              <span className="card-title">wips</span>
              <span className="card-number">8</span>
            </div>
          </div>
        </div>

        <div className="cards-row">
          <div className="dashboard-card finished">
            <div className="card-content">
              <span className="card-title">finished</span>
              <span className="card-number">13</span>
            </div>
          </div>

          <div className="dashboard-card ideas">
            <div className="card-content">
              <span className="card-title">ideas</span>
              <span className="card-number">54</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
