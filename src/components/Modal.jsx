import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { appContext } from "../context";

function Login() {
  const { setAccessToken, setOpenModal, setIsLoggedIn, setShowOverlay } =
    useContext(appContext);
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // separate into 2 functions
  const handleClick = async function () {
    const res = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    if (data?.accessToken) {
      setAccessToken(data?.accessToken);
      localStorage.setItem("accessToken", JSON.stringify(data?.accessToken));
      setIsLoggedIn(true);
      setOpenModal(false);
      navigate("/admin");
      setShowOverlay(false);
    }
  };
  return (
    <div className="login-input">
      <div className="form">
        {/* <input
          type="text"
          value={body.email}
          onChange={(e) => setBody({ ...body, email: e.target.value })}
        /> */}
        <button
          onClick={() => {
            setOpenModal((prev) => !prev);
            setShowOverlay(false);
          }}
          className="close-modal"
        >
          X
        </button>
        <TextField
          className="textfield-outline"
          id="outlined-3"
          autoComplete="current-username"
          variant="outlined"
          value={body.email}
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          placeholder="email"
        />
        <TextField
          className="textfield-outline"
          id="outlined-4"
          autoComplete="current-username"
          variant="outlined"
          value={body.password}
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          placeholder="password"
        />
        {/* <input
          type="text"
          value={body.password}
          onChange={(e) => setBody({ ...body, password: e.target.value })}
        /> */}
        <Button variant="contained" onClick={handleClick}>
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Login;
