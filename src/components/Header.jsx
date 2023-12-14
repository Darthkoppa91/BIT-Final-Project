import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../context";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const {
    setSelectedCandidate,
    isLoggedIn,
    setOpenModal,
    setIsLoggedIn,
    setAccessToken,
    setShowOverlay,
  } = useContext(appContext);
  return (
    <div className="header">
      <Link to="/">
        {/* <img src="./images/Logo pick canva.png" alt="logo pic" /> */}
        <h1 className="main-heading">
          V<span className="main-span">AP</span>
        </h1>
      </Link>

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
              setSelectedCandidate(null);
              navigate("/");
            }}
          >
            <Link to="/">Log Out</Link>
          </li>
        ) : (
          <li
            onClick={() => {
              setOpenModal((prev) => !prev);
              setShowOverlay(true);
            }}
          >
            Log In
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
