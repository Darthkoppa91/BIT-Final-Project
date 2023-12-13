import React, { useContext, useState } from "react";
import WizzardOne from "./wizzard/WizzardOne";
import WizzardTwo from "./wizzard/WizzardTwo";
import WizzardThree from "./wizzard/WizzardThree";

import "../styles/wizzard.css";
import { appContext } from "../context";
import Wizzardv2 from "./AdminCreateReportV2";
import WizzardStefanV2 from "./WizzardStefanV2";

function AdminCreateReports({ setShowReport }) {
  const { setShowOverlay, createReport, setCreateReport } =
    useContext(appContext);
  const [step, setStep] = useState(1);

  return (
    <div className="create-report">
      <h2 className="submit-heading">Submit Candidate Report</h2>
      <button
        onClick={() => {
          setShowReport((prev) => !prev);
          setShowOverlay(false);
        }}
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
          // <WizzardOne
          //   setStep={setStep}
          //   setCreateReport={setCreateReport}
          //   createReport={createReport}
          // />
          <Wizzardv2 setStep={setStep} />
        ) : (
          ""
        )}
        {step === 2 ? (
          // <WizzardTwo
          //   setStep={setStep}
          //   setCreateReport={setCreateReport}
          //   createReport={createReport}
          // />
          <WizzardStefanV2 setStep={setStep} />
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
