import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your online destination
          for beautiful houseplants.
        </p>

        <Link to="/plants">
          <button className="get-started">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
