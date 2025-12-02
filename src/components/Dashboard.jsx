import React from 'react';
import '../styles/dashboard.css';

export default function Dashboard() {
  return (
    <main className="dashboard fade-in">
      <div className="cards-row">
        <div className="summary-cards">
          <div className="order-and-customer-cards">
            <div className="card">
              Customers <h2>3,782</h2>
            </div>
            <div className="card">
              Orders <h2>5,359</h2>
            </div>
          </div>
          <div className="card graph-card">
            Monthly Sales (Graph Placeholder)
          </div>
        </div>
        <div className="card big-card">Monthly Target (Graph Placeholder)</div>
      </div>

      <div className="card graph-card">Statistics (Graph Placeholder)</div>
    </main>
  );
}
