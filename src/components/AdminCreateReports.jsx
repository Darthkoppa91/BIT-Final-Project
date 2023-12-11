import React, { useState } from "react";
import WizzardOne from "./wizzard/WizzardOne";
import WizzardTwo from "./wizzard/WizzardTwo";
import WizzardThree from "./wizzard/WizzardThree";

import "../styles/wizzard.css";

function AdminCreateReports() {
  const [step, setStep] = useState(1);
  const [createReport, setCreateReport] = useState({
    candidateId: "",
    candidateName: "",
    companyId: "",
    id: "",
    interviewDate: "",
    note: "",
    phase: "",
    status: "",
  });
  return (
    <div>
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
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminCreateReports;
