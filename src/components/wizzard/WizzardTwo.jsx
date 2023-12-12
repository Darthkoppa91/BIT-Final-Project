import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function WizzardTwo({ setStep, createReport, setCreateReport }) {
  return (
    <div className="wizzard">
      <TextField
        className="textfield-outline"
        id="outlined-2355"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.candidateName}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            candidateName: e.target.value,
          })
        }
        placeholder="Candidate Name"
      />
      <TextField
        className="textfield-outline"
        id="outlined-1356"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.companyName}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            companyName: e.target.value,
          })
        }
        placeholder="Company Name"
      />
      <TextField
        className="textfield-outline"
        id="outlined-2933"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.interviewDate}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            interviewDate: e.target.value,
          })
        }
        placeholder="Interview Date"
      />
      <div className="buttons">
        <Button variant="contained" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default WizzardTwo;
