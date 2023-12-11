import React, { useContext, useEffect } from "react";
import { appContext } from "../context";
import { slike } from "../slike";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/singleCandidate.css";

function SingleCandidate() {
  const navigate = useNavigate();
  const {
    selectedCandidate,
    setSelectedCandidate,
    setReport,
    report,
    accessToken,
    setCandidates,
  } = useContext(appContext);
  const getReport = async function (id) {
    const res = await fetch(
      `http://localhost:3333/api/reports?candidateId=${id}`
    );
    const data = await res.json();
    setReport(data);
    console.log(data);
  };

  useEffect(() => {
    getReport(selectedCandidate.id);
  }, []);

  const deleteCandidate = async function (id, candidate) {
    const res = await fetch(`http://localhost:3333/api/candidates/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const deletedCandidate = await res.json();
    setCandidates((prev) => prev.filter((candidate) => candidate.id !== id));
    setSelectedCandidate(null);
    navigate("/candidates");
  };

  const imgTag = slike[Math.floor(Math.random() * 9)];
  return (
    <div className="single-candidate-card">
      <div>
        <img src={imgTag} alt="BITOVAC" />
        <p>Name:{selectedCandidate?.name}</p>
        <p>ID:{selectedCandidate?.id}</p>
        <p>Contact:{selectedCandidate?.email}</p>
        <p>Birthday:{selectedCandidate?.birthday}</p>
        <p>Education:{selectedCandidate?.education}</p>
        <div className="button-container">
          <button onClick={() => setSelectedCandidate(null)}>
            Back to all candidates
          </button>
          <button onClick={() => deleteCandidate(selectedCandidate?.id)}>
            Delete Candidate
          </button>
        </div>
      </div>
      <div className="reports-div">
        {report.length > 0 ? (
          <h2>Reports</h2>
        ) : (
          <h2>No reports were found for this candidate!</h2>
        )}
        <List />
      </div>
    </div>
  );
}

function List() {
  const { report } = useContext(appContext);
  return (
    <ul className="reports">
      {report.map((rep) => {
        return (
          <li className="li-item">
            <p>
              <span>Applied for:</span> {rep.companyName}
            </p>
            <p>
              <span>Interview Date:</span> {rep.interviewDate}
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
