import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../context";
function Header() {
  const { setSelectedCandidate } = useContext(appContext);
  return (
    <div className="header">
      <h1>VAP</h1>
      <ul>
        <li onClick={() => setSelectedCandidate(null)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setSelectedCandidate(null)}>
          <Link to="/companies">Companies</Link>
        </li>
        <li>
          <Link to="/candidates">Candidates</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
