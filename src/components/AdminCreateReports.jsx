import React, { useState } from "react";
import WizzardOne from "./wizzard/WizzardOne";
import WizzardTwo from "./wizzard/WizzardTwo";
import WizzardThree from "./wizzard/WizzardThree";

import "../styles/wizzard.css";

function AdminCreateReports({ setShowReport }) {
  const [step, setStep] = useState(1);
  const [createReport, setCreateReport] = useState({
    candidateId: "",
    companyName: "",
    candidateName: "",
    companyId: "",
    id: "",
    interviewDate: "",
    note: "",
    phase: "",
    status: "",
  });
  return (
    <div className="create-report">
      <button
        onClick={() => setShowReport((prev) => !prev)}
        className="close-modal"
      >
        X
      </button>
      <div className="step">
        <p style={{ backgroundColor: step === 1 ? "salmon" : "" }}>1</p>
        <p style={{ backgroundColor: step === 2 ? "salmon" : "" }}>2</p>
        <p style={{ backgroundColor: step === 3 ? "salmon" : "" }}>3</p>
      </div>
      <div className="steps">
        {step === 1 ? (
          <WizzardOne
            setStep={setStep}
            setCreateReport={setCreateReport}
            createReport={createReport}
          />
        ) : (
          ""
        )}
        {step === 2 ? (
          <WizzardTwo
            setStep={setStep}
            setCreateReport={setCreateReport}
            createReport={createReport}
          />
        ) : (
          ""
        )}
        {step === 3 ? (
          <WizzardThree
            setStep={setStep}
            setCreateReport={setCreateReport}
            createReport={createReport}
            setShowReport={setShowReport}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminCreateReports;
