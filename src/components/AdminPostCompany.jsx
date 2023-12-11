import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { appContext } from "../context";
import "../styles/admin.css";
function AdminPostCompany({ setShowCompany }) {
  const { accessToken, setCompanies } = useContext(appContext);
  const [postCompany, setPostCompany] = useState({
    url: "",
    id: "",
    name: "",
    email: "",
    about: "",
  });
  const handleClick = async function () {
    if (
      postCompany.id === "" ||
      postCompany.name === "" ||
      postCompany.email === ""
    )
      return;
    const res = await fetch("http://localhost:3333/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(postCompany),
    });
    const data = await res.json();
    setShowCompany(false);
    setCompanies((prev) => [...prev, postCompany]);
    console.log(data);
  };
  return (
    <div className="post-candidate-div">
      <button
        onClick={() => setShowCompany((prev) => !prev)}
        className="close-modal"
      >
        X
      </button>
      <TextField
        className="textfield-outline"
        id="outlined-10"
        autoComplete="current-username"
        variant="outlined"
        value={postCompany.url}
        onChange={(e) =>
          setPostCompany({ ...postCompany, url: e.target.value })
        }
        placeholder="url"
      />
      <TextField
        className="textfield-outline"
        id="outlined-11"
        autoComplete="current-username"
        variant="outlined"
        value={postCompany.id}
        onChange={(e) =>
          setPostCompany({ ...postCompany, id: Number(e.target.value) })
        }
        placeholder="id"
      />
      <TextField
        className="textfield-outline"
        id="outlined-12"
        autoComplete="current-username"
        variant="outlined"
        value={postCompany.name}
        onChange={(e) =>
          setPostCompany({ ...postCompany, name: e.target.value })
        }
        placeholder="name"
      />
      <TextField
        className="textfield-outline"
        id="outlined-13"
        autoComplete="current-username"
        variant="outlined"
        value={postCompany.email}
        onChange={(e) =>
          setPostCompany({ ...postCompany, email: e.target.value })
        }
        placeholder="email"
      />
      <TextField
        className="textfield-outline"
        id="outlined-14"
        autoComplete="current-username"
        variant="outlined"
        value={postCompany.about}
        onChange={(e) =>
          setPostCompany({ ...postCompany, about: e.target.value })
        }
        placeholder="about"
      />
      <Button variant="contained" onClick={handleClick}>
        Post
      </Button>
    </div>
  );
}

export default AdminPostCompany;
