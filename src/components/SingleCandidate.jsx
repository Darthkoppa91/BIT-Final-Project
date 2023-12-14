import React, { useContext, useEffect } from "react";
import { appContext } from "../context";
import { slike } from "../slike";
import { useNavigate } from "react-router-dom";
import "../styles/singleCandidate.css";
import { deleteReport } from "../helpers";

function SingleCandidate() {
  const navigate = useNavigate();
  const {
    selectedCandidate,
    setSelectedCandidate,
    setReport,
    report,
    accessToken,
    setCandidates,
    isLoggedIn,
  } = useContext(appContext);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const getReport = async function (id) {
    const res = await fetch(
      `http://localhost:3333/api/reports?candidateId=${id}`
    );
    const data = await res.json();
    setReport(data);
    console.log(data);
  };

  useEffect(() => {
    getReport(selectedCandidate?.id);
  }, []);

  const deleteCandidate = async function (id) {
    const res = await fetch(`http://localhost:3333/api/candidates/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // const deletedCandidate = await res.json();
    setCandidates((prev) => prev.filter((candidate) => candidate.id !== id));
    setSelectedCandidate(null);
    navigate("/candidates");
  };

  const imgTag = slike[Math.floor(Math.random() * 9)];
  const birthday = new Date(Date.parse(selectedCandidate?.birthday));

  return (
    <div className="single-candidate-card">
      <div>
        <button
          className="back"
          onClick={() => {
            navigate("/candidates");
          }}
        >
          BACK
        </button>
        <img src={imgTag} alt="BITOVAC" />
        <p>
          <span>Name:</span>
          {selectedCandidate?.name}
        </p>

        <p>
          <span>Contact:</span>
          {selectedCandidate?.email}
        </p>
        <p>
          <span>Birthday:</span>
          {birthday.toLocaleDateString("en-US", options)}
        </p>
        <p>
          <span>Education:</span>
          {selectedCandidate?.education}
        </p>
        <div className="button-container">
          {isLoggedIn ? (
            <button onClick={() => deleteCandidate(selectedCandidate?.id)}>
              Delete Candidate
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="reports-div">
        {report.length > 0 ? (
          <h2>Reports</h2>
        ) : (
          <h2>No reports were found for this candidate!</h2>
        )}
        <List options={options} />
      </div>
    </div>
  );
}

function List({ options }) {
  const { report, accessToken, setReport, isLoggedIn } = useContext(appContext);

  return (
    <ul className="reports">
      {report.map((rep) => {
        const iDate = new Date(Date.parse(rep?.interviewDate));
        return (
          <li className="li-item">
            {isLoggedIn ? (
              <img
                src="./images/trash.png"
                alt=""
                className="trash"
                onClick={() => deleteReport(rep.id, accessToken, setReport)}
              />
            ) : (
              ""
            )}
            <p>
              <span>Applied for:</span> {rep.companyName}
            </p>
            <p>
              <span>Interview Date:</span>{" "}
              {iDate.toLocaleDateString("en-US", options)}
            </p>
            <p>
              {" "}
              <span>Phase:</span> {rep.phase}
            </p>
            <p>
              <span>Status:</span> {rep.status}
            </p>
            <p>
              <span>Note:</span> {rep.note}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
export default SingleCandidate;
