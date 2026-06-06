import StatsCard from "../components/Dashboard/StatsCard";
import PlantList from "../components/Dashboard/PlantList";
import HealthPanel from "../components/Dashboard/HealthPanel";
import ReminderPanel from "../components/Dashboard/ReminderPanel";
import ActivityChart from "../components/Dashboard/ActivityChart";
import "./Dashboard.css";

function Dashboard() {
  return (

    <main className="dashboard">
      <h1>Your Plant Dashboard</h1>
      <p>Track your plants and thier care needs at a glance</p>
    
      <section className="stats-grid">
      <StatsCard title="Total Plants" value="6" icon="🌱" />
      <StatsCard title="Need Water Today" value="2" icon="💧" />
      <StatsCard title="Avg. Health" value="88%" icon="✨" />
      <StatsCard title="Care Streak" value="12 days" icon="🔥" />
      </section>

      <section className="dashboard-grid">
      <PlantList />
      <div className="side-panels">
        <HealthPanel/>
        <ReminderPanel/>
      </div>
      </section>

      <ActivityChart />

    </main>
  );
}

export default Dashboard;
