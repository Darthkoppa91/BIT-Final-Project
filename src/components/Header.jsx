import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../context";

function Header() {
  const {
    setSelectedCandidate,
    isLoggedIn,
    setOpenModal,
    setIsLoggedIn,
    setAccessToken,
  } = useContext(appContext);
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
        {isLoggedIn ? (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <li
            onClick={() => {
              setIsLoggedIn(false);
              setAccessToken("");
              localStorage.removeItem("accessToken");
            }}
          >
            <Link to="/">Log Out</Link>
          </li>
        ) : (
          <li onClick={() => setOpenModal((prev) => !prev)}>Log In</li>
        )}
      </ul>
    </div>
  );
}

export default Header;
