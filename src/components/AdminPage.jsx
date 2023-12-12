import React, { useState } from "react";
import AdminPostCandidate from "./AdminPostCandidate";
import "../styles/admin.css";
import AdminPostCompany from "./AdminPostCompany";
import AdminCreateReports from "./AdminCreateReports";

function AdminPage() {
  const [showForm, setShowForm] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showReport, setShowReport] = useState(false);
  return (
    <div className="admin-container">
      <div>
        <button onClick={() => setShowForm(!showForm)}>Add Candidate</button>
      </div>
      <div>
        <button onClick={() => setShowCompany(!showCompany)}>
          Add Company
        </button>
      </div>
      <div>
        <button onClick={() => setShowReport(!showReport)}>Add Report</button>
      </div>

      {showForm ? <AdminPostCandidate setShowForm={setShowForm} /> : ""}
      {showCompany ? <AdminPostCompany setShowCompany={setShowCompany} /> : ""}
      {showReport ? <AdminCreateReports setShowReport={setShowReport} /> : ""}
    </div>
  );
}

export default AdminPage;
