import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Citizens from "./Components/Citizens";
import Students from "./Components/Students";
import Albums from "./Components/Albums";
import Freudian from "./Components/Freudian";
import NeverEnough from "./Components/NeverEnough";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li className="logo">
            <h2>Daniel Caesar</h2>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
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
          </li> */}
          <li>
            <NavLink
              to="/album"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citizens-record" element={<Citizens />} />
        <Route path="/students-record" element={<Students />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/freudian" element={<Freudian />} />
        <Route path="/never-enough" element={<NeverEnough />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="bg">
        <div className="bg-content">
          <h1>Daniel Caesar</h1>
          <p>Creating beauty through the art of music.</p>
        </div>
      </div>

      <div className="title">
        <h1>About the Artist</h1>
      </div>

      <div className="biography">
        <p>
          Daniel Caesar, born Ashton Simmonds on April 5, 1995, is a critically
          acclaimed Canadian singer, songwriter, and record producer. Known for
          his soulful voice and emotive lyrics, Daniel has captivated audiences
          worldwide with his unique blend of R&B, soul, and gospel influences.
        </p>
        <div className="title">
          <h2>Achievements</h2>
        </div>
        <ul>
          <li>Grammy Award for Best R&B Performance (2019)</li>
          <li>Juno Award for R&B/Soul Recording of the Year (2018)</li>
          <li>Platinum-certified albums and singles</li>
        </ul>
      </div>

      <div className="title">
        <h1>Featured Works</h1>
      </div>

      <div className="gallery">
        <div className="gallery-grid">
          <img src="/images/freudian.jpg" alt="Freudian" />
          <img src="/images/never-enough.png" alt="Never Enough" />
          <img src="/images/case-study.png" alt="Case Study 01" />
        </div>
        <a href="gallery.html">View More</a>
      </div>

      <div className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Concert at Madison Square Garden - July 25, 2024</li>
          <li>Live Performance at Coachella - April 12, 2024</li>
          <li>Album Release Party in Toronto - October 15, 2024</li>
        </ul>
        <a href="events.html">View All Events</a>
      </div>

      <div className="news">
        <h2>Latest News</h2>
        <article>
          <h3>New Album Release</h3>
          <p>Daniel Caesar announces his upcoming album...</p>
          <a href="news1.html">Read More</a>
        </article>
        <article>
          <h3>Grammy Nomination</h3>
          <p>Daniel Caesar receives another Grammy nomination...</p>
          <a href="news2.html">Read More</a>
        </article>
        <a href="blog.html">Read All News</a>
      </div>

      {/* <div className="social-media">
        <h2>Follow Me</h2>
        <div className="social-icons">
          <a
            href="https://twitter.com/danielcaesar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/danielcaesar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/danielcaesar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="social-feed">
        </div>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <form action="submit-form.php" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
        <p>
          Email: <a href="mailto:artist@example.com">artist@example.com</a>
        </p>
        <p>
          For bookings, please contact{" "}
          <a href="mailto:booking@example.com">booking@example.com</a>
        </p>
      </div> */}

      {/* <footer>
        <h2>Stay Updated</h2>
        <form action="subscribe.php" method="post">
          <label htmlFor="newsletter-email">Email:</label>
          <input type="email" id="newsletter-email" name="newsletter-email" />
          <button type="submit">Subscribe</button>
        </form>
      </footer> */}
    </div>
  );
}

export default App;
