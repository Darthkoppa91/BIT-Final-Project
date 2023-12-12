import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { appContext } from "../context";
import "../styles/admin.css";
import { getData } from "../helpers";
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

    getData(
      accessToken,
      postCompany,
      "companies",
      setShowCompany,
      setCompanies
    );
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
