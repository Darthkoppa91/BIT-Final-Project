import React, { useContext } from "react";
import { appContext } from "../context";

import Button from "@mui/material/Button";

function Wizzardv2({ setStep }) {
  const { candidates, createReport, setCreateReport } = useContext(appContext);
  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) =>
          console.log(e.target.id) ||
          setCreateReport({
            ...createReport,
            candidateId: Number(e.target.value),
            candidateName: candidates.find(
              (candidate) =>
                console.log(candidate) || candidate.id === e.target.value
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
            >
              {cand.name}
            </option>
          );
        })}
        <option> test </option>
      </select>
      <Button variant="contained" onClick={() => setStep(2)}>
        Next
      </Button>
    </div>
  );
}

export default Wizzardv2;
