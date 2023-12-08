import React, { useState, useContext } from "react";
import { appContext } from "../context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/inputPreview.css";

function InputPreview() {
  const { setPreviewCandidate } = useContext(appContext);
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const { candidates } = useContext(appContext);
  const [error, setError] = useState(false);

  const handleClick = function () {
    let auth = candidates.find(
      (candidate) =>
        (candidate.name.toLowerCase() === inputValue.toLowerCase() ||
          candidate.email.toLowerCase() === inputValue.toLowerCase()) &&
        candidate.id === Number(password)
    );
    console.log(auth);
    if (auth) {
      setPreviewCandidate(auth);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="input-div">
      <h2>Sign in as Candidate</h2>
      <TextField
        error={error}
        className="textfield-outline"
        id="outlined-1"
        label={error ? "Enter Correct Username/Email" : "username"}
        autoComplete="current-username"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      <TextField
        error={error}
        id="outlined-2"
        label={error ? "Enter correct password/ID" : "password"}
        type="password"
        autoComplete="current-password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}
      <Button variant="contained" onClick={handleClick}>
        Search
      </Button>
      {/* <button onClick={handleClick}>Search</button> */}
    </div>
  );
}

export default InputPreview;
