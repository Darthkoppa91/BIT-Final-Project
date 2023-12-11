import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function WizzardOne({ setStep, setCreateReport, createReport }) {
  return (
    <div>
      <TextField
        className="textfield-outline"
        id="outlined-14"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.candidateId}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            candidateId: Number(e.target.value),
          })
        }
        placeholder="Candidate ID"
      />
      <TextField
        className="textfield-outline"
        id="outlined-14"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.companyId}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            companyId: Number(e.target.value),
          })
        }
        placeholder="Company ID"
      />
      <TextField
        className="textfield-outline"
        id="outlined-14"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.id}
        onChange={(e) =>
          setCreateReport({ ...createReport, id: Number(e.target.value) })
        }
        placeholder="Report ID"
      />
      <Button variant="contained" onClick={() => setStep(1)}>
        Back
      </Button>
      <Button variant="contained" onClick={() => setStep(2)}>
        Next
      </Button>
    </div>
  );
}

export default WizzardOne;
