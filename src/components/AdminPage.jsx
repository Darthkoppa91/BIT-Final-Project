import React, { useContext, useState } from "react";
import AdminPostCandidate from "./AdminPostCandidate";
import "../styles/admin.css";
import AdminPostCompany from "./AdminPostCompany";
import AdminCreateReports from "./AdminCreateReports";
import { appContext } from "../context";
import AdminsPreview from "./AdminsPreview";

function AdminPage() {
  const { setShowOverlay } = useContext(appContext);
  const [showForm, setShowForm] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(0);
  return (
    <div className="admin-container">
      <h1>
        Welcome Back{" "}
        <span
          onMouseEnter={() => setSelectedAdmin(0)}
          onMouseLeave={() => setSelectedAdmin(0)}
        >
          👨‍💻
        </span>
        <span
          onMouseEnter={() => setSelectedAdmin(1)}
          onMouseLeave={() => setSelectedAdmin(0)}
        >
          👨🏻‍💻
        </span>
        <span
          onMouseEnter={() => setSelectedAdmin(2)}
          onMouseLeave={() => setSelectedAdmin(0)}
        >
          👨🏿‍💻
        </span>
      </h1>
      <div className="btns">
        <button
          onClick={() => {
            setShowForm(!showForm);
            setShowOverlay(true);
          }}
        >
          Add Candidate
        </button>

        <button
          onClick={() => {
            setShowCompany(!showCompany);
            setShowOverlay(true);
          }}
        >
          Add Company
        </button>

        <button
          onClick={() => {
            setShowReport(!showReport);
            setShowOverlay(true);
          }}
        >
          Add Report
        </button>
      </div>

      {showForm ? <AdminPostCandidate setShowForm={setShowForm} /> : ""}
      {showCompany ? <AdminPostCompany setShowCompany={setShowCompany} /> : ""}
      {showReport ? <AdminCreateReports setShowReport={setShowReport} /> : ""}
      <AdminsPreview selectedAdmin={selectedAdmin} />
    </div>
  );
}

export default AdminPage;
