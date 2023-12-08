import React, { useContext } from "react";
import AboutUs from "./AboutUs";
import CandidatePreview from "./CandidatePreview";
import InputPreview from "./InputPreview";
import { appContext } from "../context";

function Main() {
  const { previewCandidate } = useContext(appContext);
  return (
    <div className="container main">
      <AboutUs />
      {!previewCandidate ? <InputPreview /> : <CandidatePreview />}
    </div>
  );
}

export default Main;
