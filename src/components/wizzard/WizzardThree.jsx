import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { appContext } from "../../context";

function WizzardThree({
  setCreateReport,
  createReport,
  setStep,
  setShowReport,
}) {
  const { accessToken, setShowOverlay, report, setReport } =
    useContext(appContext);
  const handleSubmit = async function () {
    const res = await fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(createReport),
    });
    const data = await res.json();

    setShowReport(false);
    setShowOverlay(false);
    setReport((prev) => [...prev, data]);
    setCreateReport({
      candidateId: "",
      candidateName: "",
      companyId: "",
      companyName: "",
      interviewDate: "",
      note: "",
      phase: "",
      status: "",
    });
  };
  return (
    <div className="wizzard">
      <TextField
        className="textfield-outline"
        id="outlined-2879"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.note}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            note: e.target.value,
          })
        }
        placeholder="Note"
      />
      <TextField
        className="textfield-outline"
        id="outlined-8761356"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.phase}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            phase: e.target.value,
          })
        }
        placeholder="Phase"
      />
      <TextField
        className="textfield-outline"
        id="outlined-75432933"
        autoComplete="current-username"
        variant="outlined"
        value={createReport.status}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            status: e.target.value,
          })
        }
        placeholder="Status"
      />
      <input
        type="date"
        value={createReport.interviewDate}
        onChange={(e) =>
          setCreateReport({
            ...createReport,
            interviewDate: e.target.value,
          })
        }
      />

      <div className="buttons">
        <Button variant="contained" onClick={() => setStep(2)}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={
            createReport.candidateId && createReport.companyId ? false : true
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default WizzardThree;
