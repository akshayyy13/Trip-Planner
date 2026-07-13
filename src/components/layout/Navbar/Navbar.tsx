import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          🌴 Kerala Trip 2026
        </NavLink>

        <nav className="navbar__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/itinerary">Itinerary</NavLink>
          <NavLink to="/transport">Transport</NavLink>
          <NavLink to="/hotels">Hotels</NavLink>
          <NavLink to="/budget">Budget</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
