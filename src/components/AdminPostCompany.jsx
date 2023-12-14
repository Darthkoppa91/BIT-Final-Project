import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { appContext } from "../context";
import "../styles/admin.css";
import { getData } from "../helpers";
function AdminPostCompany({ setShowCompany }) {
  const { accessToken, setCompanies, setShowOverlay, companies } =
    useContext(appContext);
  const [postCompany, setPostCompany] = useState({
    url: "",
    companyId: Math.trunc(Math.random() * 100000),
    name: "",
    email: "",
    about: "",
  });
  const handleClick = async function () {
    if (postCompany.name === "" || postCompany.email === "") return;
    if (companies.find((company) => company.id === postCompany.id)) return;

    getData(
      accessToken,
      postCompany,
      "companies",
      setShowCompany,
      setCompanies
    );
    setShowOverlay(false);
  };
  return (
    <div className="post-candidate-div">
      <h2 className="submit-headings">Submit New Company</h2>
      <button
        onClick={() => {
          setShowCompany((prev) => !prev);
          setShowOverlay(false);
        }}
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
