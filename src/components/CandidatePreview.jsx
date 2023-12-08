import React, { useContext } from "react";
import { appContext } from "../context";
import Button from "@mui/material/Button";
import { slike } from "../slike";
import "../styles/inputPreview.css";
function CandidatePreview() {
  const { previewCandidate, setPreviewCandidate } = useContext(appContext);
  const imgTag = slike[Math.floor(Math.random() * 9)];
  return (
    <div className="preview-card">
      <div>
        <img src={imgTag} alt="" />
      </div>
      <div className="preview-text">
        <p>{previewCandidate.name}</p>
        <p>{previewCandidate.education}</p>
        <p>{previewCandidate.email}</p>
      </div>
      {/* <button onClick={() => setPreviewCandidate(null)}>Go Back</button> */}
      <Button variant="contained" onClick={() => setPreviewCandidate(null)}>
        Go Back
      </Button>
    </div>
  );
}

export default CandidatePreview;
