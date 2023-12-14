import React, { useContext, useState } from "react";
import { appContext } from "../context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/admin.css";
import { getData } from "../helpers";

function AdminPostCandidate({ setShowForm }) {
  const { setCandidates, accessToken, setShowOverlay } = useContext(appContext);

  const [postCandidate, setPostCandidate] = useState({
    name: "",
    id: "",
    email: "",
    education: "",
    birthday: "",
    avatar:
      "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
  });

  const handleClick = async function () {
    if (postCandidate.name === "" || postCandidate.email === "") return;

    getData(
      accessToken,
      postCandidate,
      "candidates",
      setShowForm,
      setCandidates
    );
    setShowOverlay(false);
  };
  return (
    <div className="post-candidate-div">
      <button
        onClick={() => {
          setShowForm((prev) => !prev);

          setShowOverlay(false);
        }}
        className="close-modal"
      >
        X
      </button>
      <h2>Enter Candidate Information</h2>
      <TextField
        className="textfield-outline"
        id="outlined-5"
        autoComplete="current-username"
        variant="outlined"
        value={postCandidate.name}
        onChange={(e) =>
          setPostCandidate({ ...postCandidate, name: e.target.value })
        }
        placeholder="name"
      />
      <TextField
        className="textfield-outline"
        id="outlined-4"
        autoComplete="current-username"
        variant="outlined"
        value={postCandidate.id}
        onChange={(e) =>
          setPostCandidate({ ...postCandidate, id: Number(e.target.value) })
        }
        placeholder="id"
      />

      <TextField
        className="textfield-outline"
        id="outlined-7"
        autoComplete="current-username"
        variant="outlined"
        value={postCandidate.email}
        onChange={(e) =>
          setPostCandidate({ ...postCandidate, email: e.target.value })
        }
        placeholder="email"
      />
      <TextField
        className="textfield-outline"
        id="outlined-8"
        autoComplete="current-username"
        variant="outlined"
        value={postCandidate.education}
        onChange={(e) =>
          setPostCandidate({ ...postCandidate, education: e.target.value })
        }
        placeholder="education"
      />
      <TextField
        className="textfield-outline"
        id="outlined-9"
        autoComplete="current-username"
        variant="outlined"
        value={postCandidate.birthday}
        onChange={(e) =>
          setPostCandidate({ ...postCandidate, birthday: e.target.value })
        }
        placeholder="birthday"
      />
      <Button variant="contained" onClick={handleClick}>
        Post
      </Button>
    </div>
  );
}

export default AdminPostCandidate;
