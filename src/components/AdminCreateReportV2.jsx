import React, { useContext } from "react";
import { appContext } from "../context";

import Button from "@mui/material/Button";

function Wizzardv2({ setStep }) {
  const { candidates, createReport, setCreateReport } = useContext(appContext);
  return (
    <div className="select">
      <select
        name=""
        id=""
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            candidateId: Number(e.target.value),
            candidateName: candidates.find(
              (candidate) => candidate.id === Number(e.target.value)
            )?.name,
          })
        }
      >
        <option>Selected Candidate</option>
        {candidates.map((cand) => {
          return (
            <option
              selected={createReport.candidateId === cand.id ? true : false}
              value={cand.id}
              key={cand.id}
            >
              {cand.name}
            </option>
          );
        })}
      </select>
      <div className="btns-selected">
        <Button variant="contained" onClick={() => setStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Wizzardv2;
