import React, { useState } from "react";
import AdminPostCandidate from "./AdminPostCandidate";
import "../styles/admin.css";
import AdminPostCompany from "./AdminPostCompany";
import AdminCreateReports from "./AdminCreateReports";

function AdminPage() {
  const [showForm, setShowForm] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  return (
    <div className="admin-container">
      <button onClick={() => setShowForm(!showForm)}>Add Candidate</button>
      <button onClick={() => setShowCompany(!showCompany)}>Add Company</button>

      {showForm ? <AdminPostCandidate setShowForm={setShowForm} /> : ""}
      {showCompany ? <AdminPostCompany setShowCompany={setShowCompany} /> : ""}
      <AdminCreateReports />
    </div>
  );
}

export default AdminPage;
