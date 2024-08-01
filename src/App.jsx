import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Citizens from "./Components/Citizens";
import Students from "./Components/Students";
import Songs from "./Components/Songs"; // Import the new Songs component

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li className="logo">
            <h2>
              Fre<span>ud</span>
            </h2>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/citizens-record"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Citizens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students-record"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/songs"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Songs
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizens-record" element={<Citizens />} />
        <Route path="/students-record" element={<Students />} />
        <Route path="/songs" element={<Songs />} /> {/* Add route for Songs */}
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Concepcion!</h1>
        <p>
          Your one-stop solution for managing citizens and students records.
        </p>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>Manage citizen records</li>
          <li>Track student information</li>
          <li>Dynamic search and filtering</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
