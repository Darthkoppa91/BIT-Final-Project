import React, { useContext, useState } from "react";
import { appContext } from "../context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/admin.css";

function AdminPostCandidate({ setShowForm }) {
  const { setCandidates, accessToken } = useContext(appContext);

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
    if (
      postCandidate.id === "" ||
      postCandidate.name === "" ||
      postCandidate.email === ""
    )
      return;
    const res = await fetch("http://localhost:3333/api/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(postCandidate),
    });
    const data = await res.json();
    console.log(data);
    setCandidates((prev) => [...prev, postCandidate]);
    setShowForm(false);
  };
  return (
    <div className="post-candidate-div">
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="close-modal"
      >
        X
      </button>
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
        id="outlined-6"
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
