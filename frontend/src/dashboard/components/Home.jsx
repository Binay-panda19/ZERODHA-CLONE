import React from "react";
import "../DashboardWrapper.css";
import "../Dashboard.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Home() {
  return (
    <>
      <div className="dashboard-root">
        <TopBar />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
